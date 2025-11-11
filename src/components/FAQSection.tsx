import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O Método das 4 Fases funciona para qualquer idade?",
      answer:
        "Sim! O método foi desenvolvido com base em estudos científicos sobre metabolismo e pode ser aplicado por mulheres de todas as idades. O programa se adapta ao seu ritmo e necessidades individuais.",
    },
    {
      question: "Preciso fazer exercícios pesados?",
      answer:
        "Não. O método foca na reprogramação metabólica através da alimentação estratégica. Exercícios leves são bem-vindos, mas não são obrigatórios para obter resultados.",
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer:
        "A maioria das mulheres começa a notar diferenças já na primeira semana. O programa completo dura 40 dias, período em que você pode perder até 21kg, dependendo do seu organismo.",
    },
    {
      question: "E se eu não conseguir seguir perfeitamente?",
      answer:
        "O método é flexível e compreensivo. Você terá suporte e orientações para adaptar o programa à sua rotina. Ninguém precisa ser perfeito para ter resultados!",
    },
    {
      question: "Como funciona a garantia?",
      answer:
        "Você tem 7 dias corridos para testar todo o conteúdo. Se não ficar satisfeita por qualquer motivo, basta solicitar o reembolso total do seu investimento. Sem perguntas, sem burocracia.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-soft">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          ❓ Perguntas Frequentes
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-2xl shadow-card px-6 border-none"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
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
