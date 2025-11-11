import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      title: "Depoimento 1",
      subtitle: "Antes e Depois",
      quote: "Transformação incrível! Perdi 18kg em 40 dias."
    },
    {
      title: "Depoimento 2",
      subtitle: "Antes e Depois",
      quote: "Transformação incrível! Perdi 18kg em 40 dias."
    },
    {
      title: "Depoimento 3",
      subtitle: "Antes e Depois",
      quote: "Transformação incrível! Perdi 19kg em 40 dias."
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Veja o que mulheres reais estão dizendo:
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Resultados reais de quem já transformou sua vida
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-pink-light rounded-3xl p-8 text-center flex flex-col justify-between"
            >
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
                  <Star className="w-12 h-12 text-primary fill-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {testimonial.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {testimonial.subtitle}
                </p>
              </div>
              <div>
                <div className="flex gap-1 justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
                <p className="text-primary italic text-sm">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
