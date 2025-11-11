import { Shield } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white rounded-3xl shadow-card p-8 md:p-12 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            🛡️ Garantia Total de 7 Dias
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Você tem <span className="font-bold text-primary">1 semana completa</span> para
              testar o Método das 4 Fases sem riscos.
            </p>
            <p>
              Se por qualquer motivo você não ficar satisfeita com o conteúdo,
              basta nos enviar um e-mail e devolveremos{" "}
              <span className="font-bold text-foreground">100% do seu investimento</span>.
            </p>
            <p className="text-base italic">
              Sem perguntas, sem burocracia. Simples assim.
            </p>
          </div>
          <div className="mt-8 p-6 bg-pink-light rounded-2xl">
            <p className="text-foreground font-semibold">
              O risco é todo nosso. A transformação é toda sua! 💖
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
