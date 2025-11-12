import { Scale, Target, Heart, Sparkles, Trophy, Shield, Crown } from "lucide-react";

const ForWhoSection = () => {
  const benefits = [
    {
      icon: Scale,
      text: "Quer perder peso de forma natural, sem dietas extremas ou remédios"
    },
    {
      icon: Target,
      text: "Já tentou emagrecer várias vezes, mas sempre volta ao peso anterior"
    },
    {
      icon: Heart,
      text: "Busca um método sustentável, que se encaixe no seu dia a dia"
    },
    {
      icon: Sparkles,
      text: "Deseja entender como seu metabolismo funciona e como acelerá-lo"
    },
    {
      icon: Trophy,
      text: "Quer alcançar resultados reais em até 40 dias"
    },
    {
      icon: Shield,
      text: "Procura por um protocolo respaldado por estudos científicos"
    },
    {
      icon: Crown,
      text: "Quer se sentir leve, confiante e no controle do seu corpo novamente"
    }
  ];

  return (
    <section className="py-8 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          O Método 4 Fases é pra você que:
        </h2>
        <div className="space-y-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-card border border-border"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-light flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground leading-relaxed">{benefit.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
