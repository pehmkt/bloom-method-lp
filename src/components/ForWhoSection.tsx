import { Check } from "lucide-react";

const ForWhoSection = () => {
  const benefits = [
    "Quer perder peso de forma natural, sem dietas restritivas ou malucas",
    "Já tentou várias dietas mas sempre volta ao peso inicial (efeito sanfona)",
    "Busca um método validado por ciência e aprovado por médicos",
    "Quer entender como seu metabolismo funciona e como reprogramá-lo",
    "Deseja emagrecer sem passar fome ou sacrificar sua rotina",
    "Precisa de um passo a passo claro e progressivo, sem confusão",
    "Sonha em ter um corpo leve e saudável, mantendo resultados para sempre",
  ];

  return (
    <section className="py-16 px-4 bg-gradient-soft">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          🌸 O Método das 4 Fases é pra você que:
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-card hover:shadow-soft transition-shadow"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-light flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
