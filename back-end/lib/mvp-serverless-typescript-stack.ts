// lib/api-stack.ts
import { Stack, StackProps, RemovalPolicy, CfnOutput } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigwv2 from "aws-cdk-lib/aws-apigatewayv2";
import * as cognito from "aws-cdk-lib/aws-cognito";
import * as apigwv2Authorizers from "aws-cdk-lib/aws-apigatewayv2-authorizers";

import { HttpMethod } from "aws-cdk-lib/aws-apigatewayv2";
import { HttpLambdaIntegration } from "aws-cdk-lib/aws-apigatewayv2-integrations";
import path from "path";

export class Try extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const table = new dynamodb.Table(this, "AppDataTable", {
      tableName: "todoTable",
      partitionKey: { name: "PK", type: dynamodb.AttributeType.STRING },
      sortKey: { name: "SK", type: dynamodb.AttributeType.STRING },
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const fn = new lambda.Function(this, "CrudLambda", {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset(path.join(__dirname, "../src/dist")),
      handler: "index.handler",
      functionName: "todo-function",
    });

    table.grantReadWriteData(fn);
    const userPool = new cognito.UserPool(this, "TodoUserPool", {
      userPoolName: "todo-user-pool",
      selfSignUpEnabled: true,
      signInAliases: { email: true },
      autoVerify: { email: true },
      passwordPolicy: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireDigits: true,
        requireSymbols: false,
      },
    });

    const userPoolClient = new cognito.UserPoolClient(
      this,
      "TodoUserPoolClient",
      {
        userPool,
        userPoolClientName: "todo-app-client",
        generateSecret: false,
        authFlows: {
          userPassword: true,
          userSrp: true,
        },
        oAuth: {
          flows: { authorizationCodeGrant: true },
          scopes: [cognito.OAuthScope.OPENID, cognito.OAuthScope.EMAIL],
          callbackUrls: ["http://localhost:3000/callback"],
          logoutUrls: ["http://localhost:3000/"],
        },
      }
    );

    userPool.addDomain("CognitoDomain", {
      cognitoDomain: {
        domainPrefix: "todo-app-demo",
      },
    });

    const httpApi = new apigwv2.HttpApi(this, "CrudHttpApi", {
      apiName: "todo-api",
      corsPreflight: {
        allowOrigins: ["http://localhost:5174"],
        allowMethods: [
          apigwv2.CorsHttpMethod.GET,
          apigwv2.CorsHttpMethod.POST,
          apigwv2.CorsHttpMethod.DELETE,
          apigwv2.CorsHttpMethod.PATCH,
          apigwv2.CorsHttpMethod.OPTIONS,
        ],
        allowHeaders: ["Authorization", "Content-Type"],
      },
    });

    const authorizer = new apigwv2Authorizers.HttpUserPoolAuthorizer(
      "TodoApiAuthorizer",
      userPool,
      {
        userPoolClients: [userPoolClient],
      }
    );

    const lambdaIntegration = new HttpLambdaIntegration("CrudIntegration", fn);

    httpApi.addRoutes({
      path: "/items",
      methods: [HttpMethod.GET, HttpMethod.POST],
      integration: lambdaIntegration,
      authorizer,
    });

    httpApi.addRoutes({
      path: "/items/{id}",
      methods: [HttpMethod.GET, HttpMethod.DELETE, HttpMethod.PATCH],
      integration: lambdaIntegration,
      authorizer,
    });

    new CfnOutput(this, "ApiUrl", {
      exportName: "APIGatewayEndpoint",
      value: httpApi.apiEndpoint,
      description: "The endpoint url of the API Gateway",
    });

    new CfnOutput(this, "UserPoolId", {
      value: userPool.userPoolId,
    });

    new CfnOutput(this, "UserPoolClientId", {
      value: userPoolClient.userPoolClientId,
    });

    new CfnOutput(this, "Region", {
      value: this.region,
    });
  }
}
