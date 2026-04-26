export function HomeFooter() {
  return (
    <footer className="border-t-2 border-solid border-border/30" style={{ backgroundColor: 'hsl(228 40% 10%)' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div>
                <span className="font-display text-lg font-bold text-gradient-gold">GÁLATAS RZ'S</span>
                <span className="block text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Barbearia</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Sua barbearia por assinatura. Cuidado contínuo, do jeito certo.
            </p>

            <div className="flex gap-3 mt-4">
              <a href="https://www.instagram.com/galatas_rzs.ofc/" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">WhatsApp</a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-primary mb-4">Links</h4>
            <div className="flex flex-col gap-2">
              <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="/agendamento" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Agendamento</a>
              <a href="/servicos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Serviços</a>
              <a href="/planos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Assinaturas</a>
              <a href="/contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contato</a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-primary mb-4">Contato</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <span>Av. Dona Cesária Camargo de Oliveira Jd Vista Alegre</span>
              <span>(11) 99999-9999</span>
              <span>contato@galatas.com</span>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-primary mb-4">Horário</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Segunda a Sexta</span>
              <span className="text-sm text-foreground font-medium ml-6">09h às 19:30h</span>
              <span className="text-sm text-muted-foreground ml-6">Sábado: 08h ás 19h</span>
            </div>
          </div>

        </div>

        <div className="border-t-2 border-solid border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
          © 2026 Gálatas RZ's Barbearia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
