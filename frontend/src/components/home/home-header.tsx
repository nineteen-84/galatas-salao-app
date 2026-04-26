import { Link } from "react-router";

import { ModeToggle } from "@/components/theme/theme-toggle";

export function HomeHeader() {
  return (
    <header className="bg-background shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-semibold text-accent-foreground">Galatas</span>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/sign-in" className="text-sm text-muted-foreground hover:text-accent-foreground">
              Login
            </Link>
            <Link to="/sign-up" className="text-sm text-muted-foreground hover:text-accent-foreground">
              Registrar
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
