const DiscountSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-block bg-pink-light px-6 py-3 rounded-full">
            <p className="text-primary font-semibold">🎉 Oferta Especial Black Friday</p>
          </div>
          <p className="text-lg md:text-xl leading-relaxed text-foreground">
            Durante o mês da <span className="font-bold text-primary">Black Friday</span>, o acesso completo ao{" "}
            <span className="font-bold">Método das 4 Fases</span> está com desconto especial —
          </p>
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl font-bold">
              de <span className="line-through text-muted-foreground">R$ 297</span>
            </p>
            <p className="text-5xl md:text-6xl font-bold text-primary">
              por apenas R$ 29,90
            </p>
          </div>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Acesse agora e <span className="font-semibold text-foreground">inicie as 4 fases do emagrecimento natural</span>{" "}
            que já transformaram milhares de mulheres.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
