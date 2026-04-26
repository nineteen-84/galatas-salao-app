import { Outlet } from "react-router";

export function HomeLayout() {
  return (
    <div className="flex flex-col min-h-screen antialiased">
      <Outlet />
    </div>
  );
}
