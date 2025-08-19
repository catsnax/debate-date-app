import { Authenticator } from "@aws-amplify/ui-react";
import "../amplifyClient";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser } from "aws-amplify/auth";
import "@aws-amplify/ui-react/styles.css";
import { fetchAuthSession } from "aws-amplify/auth";
import "../App.css";
import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";

export const Route = createFileRoute("/")({
  component: Index,
});

/*
async function fetchTodos() {
  const session = await fetchAuthSession();
  const token = session.tokens?.idToken?.toString();
  console.log(token);
  const res = await fetch(`${import.meta.env.VITE_API_URL}/items`, {
    headers: { Authorization: token ? `Bearer ${token}` : `` },
  });
  if (!res.ok) {
    throw new Error("failed fetch");
  }
  return res.json();
}*/

async function loginUser() {}

/*
function useItemsQuery() {
  return {
    queryKey: ["todos"],
    queryFn: fetchTodos,
  };
}*/

function Index() {
  const mutation = useMutation({
    mutationFn: async () => {
      const session = await fetchAuthSession();
      const token = session.tokens?.idToken?.toString();
      const { username } = await getCurrentUser();

      return axios.post(
        `${import.meta.env.VITE_API_URL}/users`,
        { PK: username, SK: username },
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
    },
    onSuccess: () => {
      close();
    },
  });

  const handleLogin = () => {
    mutation.mutate();
  };

  return (
    <Authenticator socialProviders={["google"]}>
      {({ signOut, user }) =>
        user ? (
          <main>
            <button onClick={() => handleLogin()}> Login </button>

            <button onClick={signOut}>Sign out</button>
          </main>
        ) : (
          <div>Loading...</div>
        )
      }
    </Authenticator>
  );
}

export default Index;
