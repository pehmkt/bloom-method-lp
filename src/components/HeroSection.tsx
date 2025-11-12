import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-8 px-4 bg-background">
      <div className="container mx-auto max-w-md md:max-w-4xl">
        <div className="text-center mb-6 md:mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-4 md:mb-6 px-2">
            Perca até <span className="text-primary">21kg em 40 dias</span> com o Método 4 Fases
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground px-2 md:px-4">
            Um protocolo inovador criado por uma médica americana que descobriu
            o segredo da <span className="font-semibold text-foreground">reprogramação metabólica progressiva.</span>
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-6 md:mb-8">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-card p-4 md:p-8">
            <p className="text-center text-xs md:text-sm text-muted-foreground italic px-2">
              Assista até o final para entender por que esse método tem transformado tantas mulheres.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
