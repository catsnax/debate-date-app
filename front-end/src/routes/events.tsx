import { createFileRoute } from "@tanstack/react-router";
import Card from "../components/card";

export const Route = createFileRoute("/events")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex">
      <Card />
    </div>
  );
}
