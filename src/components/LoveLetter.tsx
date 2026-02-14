const LoveLetter = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
        <p className="font-sans text-xs tracking-[0.5em] uppercase text-gold-dark mb-4 text-center">
          A Letter For You
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground text-center mb-12">
          My Dearest Precious
        </h2>

        <div className="parchment-bg rounded-lg p-8 sm:p-12 border border-gold/30">
          <p className="font-script text-2xl lg:text-3xl xl:text-4xl text-gold-dark mb-6">
            My Love,
          </p>
          <div className="font-sans text-muted-foreground leading-[1.9] space-y-4 text-sm sm:text-base xl:text-lg">
            <p>
              From the very first moment our paths crossed, I knew that God had
              answered a prayer I hadn't even finished praying. You walked into
              my life and everything changed — the colors became brighter, the
              music became sweeter, and my heart found its home.
            </p>
            <p>
              You are my Orekelewa — my beautiful one. Every day with you feels
              like a celebration, every laugh we share is a melody I never want
              to end. Your strength inspires me, your kindness humbles me, and
              your love completes me in ways I never thought possible.
            </p>
            <p>
              Thank you for choosing me, for loving me, and for being the joy
              that God blessed my life with. I promise to spend every day making
              sure you know just how deeply and completely you are loved.
            </p>
            <p className="font-script text-xl text-gold-dark pt-4 lg:text-2xl xl:text-3xl">
              Forever & Always Yours ♥
            </p>
          </div>
        </div>
      </div>
      <div className="section-divider" />
    </section>
  );
};

export default LoveLetter;
