import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import provaSocialVideo from "@/assets/prova-social-video.mp4";
import provaSocial1 from "@/assets/prova-social-1.png";
import provaSocial2 from "@/assets/prova-social-2.png";
import provaSocial3 from "@/assets/prova-social-3.png";
import provaSocial4 from "@/assets/prova-social-4.png";
import provaSocial5 from "@/assets/prova-social-5.png";

const TestimonialsSection = () => {
  const proofItems = [
    { type: 'video', src: provaSocialVideo },
    { type: 'image', src: provaSocial1 },
    { type: 'image', src: provaSocial2 },
    { type: 'image', src: provaSocial3 },
    { type: 'image', src: provaSocial4 },
    { type: 'image', src: provaSocial5 },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Veja o resultado de algumas mulheres:
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Resultados reais de quem já transformou sua vida
        </p>
        
        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {proofItems.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="bg-white rounded-3xl shadow-card overflow-hidden">
                      {item.type === 'video' ? (
                        <video
                          src={item.src}
                          controls
                          className="w-full aspect-[9/16] object-cover"
                          playsInline
                        />
                      ) : (
                        <img
                          src={item.src}
                          alt={`Prova social ${index}`}
                          className="w-full aspect-[9/16] object-cover"
                        />
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
