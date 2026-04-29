import { Helmet } from "react-helmet-async";
import background from "@/assets/auth/background-gray.jpg";

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <div style={{ backgroundColor: 'hsl(228 40% 10%)' }}>

        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={background} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-xl">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Barbearia Premium
              </span>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-5 leading-tight">
                Sua barbearia por{" "}
                <span className="text-gradient-gold">assinatura</span>
              </h1>

              <p className="text-foreground/70 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                Cuidado contínuo, do jeito certo. Você aparece, a gente resolve. Visual sempre em dia, sem complicação.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/planos" className="btn-primary">
                  Conheça Nossos Planos
                </a>
                <a href="/agendamento" className="btn-outline">
                  Agendamento Avulso
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div>
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Fique por dentro
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">
              Novidades & <span className="text-gradient-gold">Avisos</span>
            </h2>
          </div>
        </section>

      </div>
    </>
  );
}
