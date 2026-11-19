import { Outlet } from "react-router";
import { HomeHeader } from "@/components/home/home-header";

export function HomeLayout() {
  return (
    <div className="flex flex-col min-h-screen antialiased">
      <HomeHeader />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
