import { useState } from "react";
import { Link } from "react-router";
import logo from "@/assets/auth/logo.png";

export function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card" style={{ backgroundColor: 'hsl(228 40% 10%)' }}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link className="flex items-center gap-3" to="/">
          <img className="h-10 w-10 rounded-full" src={logo} alt="Gálatas RZ's" />
          <div className="hidden sm:block">
            <span className="font-display text-lg font-bold text-gradient-gold">GÁLATAS RZ'S</span>
            <span className="block text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Barbearia</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          <Link className="text-sm font-medium transition-colors hover:text-primary text-primary" to="/">Home</Link>
          <Link className="text-sm font-medium transition-colors hover:text-primary text-foreground/80" to="/agendamento">Agendamento</Link>
          <Link className="text-sm font-medium transition-colors hover:text-primary text-foreground/80" to="/servicos">Serviços</Link>
          <Link className="text-sm font-medium transition-colors hover:text-primary text-foreground/80" to="/planos">Planos</Link>
          <Link className="text-sm font-medium transition-colors hover:text-primary text-foreground/80" to="/contato">Contato</Link>
          <Link className="btn-primary" to="/sign-in">Entrar</Link>
          <Link className="btn-outline" to="/sign-up">Registrar-se</Link>
        </nav>

        <button className="lg:hidden text-foreground p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-border" style={{ backgroundColor: 'hsl(228 40% 10%)' }}>
          <nav className="flex flex-col px-4 py-4 gap-4">
            <Link className="text-sm font-medium text-primary" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link className="text-sm font-medium text-foreground/80" to="/agendamento" onClick={() => setMenuOpen(false)}>Agendamento</Link>
            <Link className="text-sm font-medium text-foreground/80" to="/servicos" onClick={() => setMenuOpen(false)}>Serviços</Link>
            <Link className="text-sm font-medium text-foreground/80" to="/planos" onClick={() => setMenuOpen(false)}>Planos</Link>
            <Link className="text-sm font-medium text-foreground/80" to="/contato" onClick={() => setMenuOpen(false)}>Contato</Link>
            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              <Link className="btn-primary text-center" to="/sign-in" onClick={() => setMenuOpen(false)}>Entrar</Link>
              <Link className="btn-outline text-center" to="/sign-up" onClick={() => setMenuOpen(false)}>Registrar-se</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
