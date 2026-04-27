export function HomeFooter() {
  return (
    <footer className="border-t-2 border-solid border-border/30" style={{ backgroundColor: 'hsl(228 40% 10%)' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div>
                <span className="font-display text-xl font-bold text-gradient-gold">GÁLATAS RZ'S</span>
                <span className="block text-xs tracking-[0.3em] text-muted-foreground uppercase font-medium">Barbearia</span>
              </div>
            </div>

            <p className="text-base font-medium text-muted-foreground leading-relaxed">
              Sua barbearia por assinatura. Cuidado contínuo, do jeito certo.
            </p>

            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/galatas_rzs.ofc/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-solid border-primary/50 text-primary hover:border-primary hover:bg-primary/10 transition-all"
              >
                <i className="ph ph-instagram-logo" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-solid border-primary/50 text-primary hover:border-primary hover:bg-primary/10 transition-all"
              >
                <i className="ph ph-whatsapp-logo" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-bold text-primary mb-4">Links</h4>
            <div className="flex flex-col gap-2">
              <a href="/" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="/agendamento" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">Agendamento</a>
              <a href="/servicos" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">Serviços</a>
              <a href="/planos" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">Assinaturas</a>
              <a href="/contato" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">Contato</a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-bold text-primary mb-4">Contato</h4>
            <div className="flex flex-col gap-3 text-base font-medium text-muted-foreground">
              <span className="flex items-center gap-2">
                <i className="ph ph-map-pin text-primary" />
                Av. Dona Cesária Camargo de Oliveira Jd Vista Alegre
              </span>
              <span className="flex items-center gap-2">
                <i className="ph ph-phone text-primary" />
                (11) 99999-9999
              </span>
              <span className="flex items-center gap-2">
                <i className="ph ph-envelope text-primary" />
                contato@galatas.com
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-bold text-primary mb-4">Horário</h4>
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-base font-medium text-muted-foreground">
                <i className="ph ph-clock text-primary" />
                Segunda a Sexta
              </span>
              <span className="text-base text-foreground font-semibold ml-6">09h às 19:30h</span>
              <span className="flex items-center gap-2 text-base font-medium text-muted-foreground">
                <i className="ph ph-clock text-primary" />
                Sábado: 08h às 19h
              </span>
            </div>
          </div>

        </div>

        <div className="border-t-2 border-solid border-border mt-10 pt-6 text-center text-sm font-medium text-muted-foreground">
          © 2026 Gálatas RZ's Barbearia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
