import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como funciona o Método 4 Fases?",
      answer:
        "O método divide o processo de emagrecimento em 4 etapas progressivas: Desintoxica, Ativa, Reequilibra e Mantém. Cada fase tem duração específica e objetivos claros para reprogramar seu metabolismo de forma natural e sustentável.",
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer:
        "A maioria das mulheres começa a notar diferenças já nas primeiras semanas. O programa completo dura 40 dias, período em que você pode perder até 21kg, dependendo do seu organismo e dedicação.",
    },
    {
      question: "Preciso fazer dietas restritivas?",
      answer:
        "Não! O método não envolve dietas extremas ou restrições malucas. Você vai aprender a comer de forma estratégica, respeitando seu corpo e acelerando naturalmente seu metabolismo.",
    },
    {
      question: "O acesso é vitalício mesmo?",
      answer:
        "Sim! Você paga uma única vez e tem acesso para sempre a todo o conteúdo, incluindo todas as atualizações futuras. Não há mensalidades ou cobranças recorrentes.",
    },
    {
      question: "E se eu não gostar do método?",
      answer:
        "Você tem 7 dias de garantia incondicional. Se não ficar satisfeita, basta enviar um e-mail e devolvemos 100% do seu investimento, sem perguntas.",
    },
  ];

  return (
    <section className="py-8 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Perguntas Frequentes
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-2xl shadow-card px-6 border border-border"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
