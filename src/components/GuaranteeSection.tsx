import { Shield } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white rounded-3xl shadow-card p-8 md:p-12 text-center border border-border">
          <div className="w-24 h-24 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
            <Shield className="w-12 h-12 text-yellow-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Garantia Incondicional de 7 Dias
          </h2>
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>
              Você tem <span className="font-bold text-foreground">1 semana inteira</span> para
              testar o Método 4 Fases. Se por qualquer motivo você não ficar satisfeita,
              basta enviar um único e-mail e devolveremos{" "}
              <span className="font-bold text-foreground">100% do seu investimento</span>,
              sem perguntas, sem burocracia.
            </p>
          </div>
          <div className="mt-8">
            <p className="text-primary font-bold text-lg">
              O risco é todo nosso. A transformação é toda sua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
