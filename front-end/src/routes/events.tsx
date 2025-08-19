import { createFileRoute } from "@tanstack/react-router";
import Card from "../components/card";
import EventForm from "../components/EventForm";

export const Route = createFileRoute("/events")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <EventForm />
      <div className="flex">
        <Card />
      </div>
    </>
  );
}
