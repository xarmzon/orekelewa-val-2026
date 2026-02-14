const MeaningSection = () => {
  return (
    <section className="py-24 px-6 bg-background relative">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.5em] uppercase text-gold-dark mb-8">
          The Meaning Behind Her Name
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-foreground mb-8 glow-animation">
          Oluwasayofunmi
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mb-8" />
        <p
          className="font-serif italic text-xl sm:text-2xl text-accent-foreground leading-relaxed mb-6"
          style={{ color: "hsl(var(--gold-dark))" }}
        >
          "The Lord has given me joy"
        </p>
        <p className="font-sans text-muted-foreground leading-relaxed max-w-lg lg:max-w-2xl mx-auto">
          And truly, you are the embodiment of that divine joy in my life. Every
          moment with you is a gift I cherish beyond words.
        </p>
      </div>
      <div className="section-divider" />
    </section>
  );
};

export default MeaningSection;
