import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID,
      userPoolClientId: import.meta.env.VITE_COGNITO_USER_POOL_CLIENT_ID,
      region: import.meta.env.COGNITO_REGION,
      loginWith: {
        oauth: {
          domain: import.meta.env.VITE_COGNITO_DOMAIN,
          scopes: ["email", "profile", "openid"],
          redirectSignIn: ["http://localhost:5174/"],
          redirectSignOut: ["http://localhost:5174/"],
          responseType: "code",
        },
      },
    },
  },
  API: {
    REST: {
      todoApi: {
        endpoint: import.meta.env.REST_API_ENDPOINT,
        region: import.meta.env.REST_API_REGION,
      },
    },
  },
});
