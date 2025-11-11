import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      result: "Perdi 18kg em 35 dias",
      text: "Nunca imaginei que seria tão natural! O método me ensinou a reprogramar meu metabolismo de verdade.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      name: "Ana Costa",
      result: "21kg em 40 dias",
      text: "Depois de anos lutando com o efeito sanfona, finalmente encontrei algo que funciona de verdade!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Julia Mendes",
      result: "15kg e me sinto incrível",
      text: "O melhor é que aprendi a manter o peso. Não é só sobre emagrecer, é sobre mudar de vida!",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-16 px-4 bg-pink-light">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          💬 Veja o que mulheres reais estão dizendo:
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Resultados reais de quem seguiu o Método das 4 Fases
        </p>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-3xl shadow-card p-6 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-primary font-medium">{testimonial.result}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    "{testimonial.text}"
                  </p>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-xl">★</span>
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
