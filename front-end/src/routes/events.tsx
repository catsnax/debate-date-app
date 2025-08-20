import { createFileRoute } from "@tanstack/react-router";
import Card from "../components/card";
import EventForm from "../components/EventForm";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getRouteApi } from "@tanstack/react-router";

export const Route = createFileRoute("/events")({
  component: RouteComponent,
  loader: () => fetchEvents(),
});

async function fetchEvents() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/events`);
  if (!res.ok) {
    throw new Error("failed fetch");
  }
  return res.json();
}

function RouteComponent() {
  const routeApi = getRouteApi("/events");
  const data = routeApi.useLoaderData();

  return (
    <main className="w-[55vw]">
      <div className="2xl:flex ">
        <h1 className="text-black"> Debate Tournaments</h1>
        <EventForm />
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-4">
        {data?.map((tournament) => (
          <Card key={tournament.SK} {...tournament} />
        ))}
      </div>
    </main>
  );
}
