import { createFileRoute } from "@tanstack/react-router";
import Card from "../components/card";
import EventForm from "../components/EventForm";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const Route = createFileRoute("/events")({
  component: RouteComponent,
});

async function fetchEvents() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/events`);
  if (!res.ok) {
    throw new Error("failed fetch");
  }
  return res.json();
}

function RouteComponent() {
  const queryClient = useQueryClient();

  const { data, isFetching } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  console.log(data);

  return (
    <>
      <EventForm />
      <div className="flex">
        <Card />
      </div>
    </>
  );
}
