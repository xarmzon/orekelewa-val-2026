import photo2 from "@/assets/photo2.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={photo2} alt="" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsla(20, 15%, 10%, 0.75), hsla(350, 30%, 15%, 0.65))",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p
          className="font-sans text-sm tracking-[0.4em] uppercase mb-6 animate-fade-in-up"
          style={{ color: "hsl(38, 50%, 70%)" }}
        >
          Happy Valentine's Day
        </p>
        <h1
          className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight animate-fade-in-up animate-delay-200"
          style={{ color: "hsl(30, 30%, 95%)" }}
        >
          To My{" "}
          <span className="italic" style={{ color: "hsl(38, 55%, 65%)" }}>
            Orekelewa
          </span>{" "}
          mi
        </h1>
        <p
          className="font-script text-3xl sm:text-4xl md:text-6xl mt-6 animate-fade-in-up animate-delay-400"
          style={{ color: "hsl(350, 50%, 80%)" }}
        >
          Precious Oluwasayofunmi
        </p>
        <div className="mt-12 animate-fade-in-up animate-delay-600">
          <span className="text-2xl" style={{ color: "hsl(350, 50%, 75%)" }}>
            ♥
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
