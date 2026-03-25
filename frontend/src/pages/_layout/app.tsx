import { Outlet } from "react-router";

import { Header } from "../../components/header";
import { Footer } from "@/components/footer";

export function AppLayout() {
  return (
    <div className="flex flex-col overflow-hidden min-h-screen antialiased">
      <Header />

      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}