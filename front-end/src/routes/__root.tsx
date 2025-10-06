import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow p-4 flex gap-4 z-50">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/events" className="[&.active]:font-bold">
          Events
        </Link>
      </nav>
      <div className="pt-20">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
