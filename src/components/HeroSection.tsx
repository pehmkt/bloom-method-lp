import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
            Perca até <span className="text-primary">21kg em 40 dias</span><br />
            com o Método das 4 Fases
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Um protocolo inovador criado por uma médica americana que descobriu
            o segredo da <span className="font-semibold text-foreground">reprogramação metabólica progressiva.</span>
          </p>
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-3xl shadow-card p-6 md:p-8">
            <div className="aspect-video bg-pink-light rounded-2xl flex items-center justify-center mb-4">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <p className="text-muted-foreground">
                  Vídeo em breve
                </p>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground italic">
              Assista até o final para entender por que esse método tem transformado tantas mulheres.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
