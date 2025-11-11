import { Gift, Droplet, Moon } from "lucide-react";

const BonusSection = () => {
  const bonuses = [
    {
      icon: Gift,
      title: "Guia de Alimentação Estratégica",
      value: "R$ 47",
      description: "Cardápios personalizados para cada uma das 4 fases",
    },
    {
      icon: Droplet,
      title: "Protocolo de Hidratação Metabólica",
      value: "R$ 37",
      description: "Como potencializar a queima de gordura através da água",
    },
    {
      icon: Moon,
      title: "Rotina Noturna para Emagrecimento",
      value: "R$ 57",
      description: "Técnicas para queimar gordura enquanto você dorme",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-soft">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            🎁 Bônus Exclusivos
          </h2>
          <p className="text-lg text-muted-foreground">
            Você recebe GRATUITAMENTE junto com o método:
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-card p-8 text-center hover:shadow-soft transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-pink-light rounded-2xl flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="mb-2">
                  <span className="inline-block bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
                    Bônus {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {bonus.title}
                </h3>
                <p className="text-primary font-bold text-2xl mb-3">{bonus.value}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="text-center bg-white p-6 rounded-2xl shadow-card max-w-md mx-auto">
          <p className="text-lg mb-2">
            <span className="text-muted-foreground">Valor total dos bônus:</span>
          </p>
          <p className="text-3xl font-bold text-primary">R$ 141</p>
          <p className="text-xl font-semibold text-foreground mt-2">
            VOCÊ RECEBE DE GRAÇA!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
