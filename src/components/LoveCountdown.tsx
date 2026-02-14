import { useState, useEffect } from "react";

const startDate = new Date("2020-01-01T00:00:00");

const LoveCountdown = () => {
  const [elapsed, setElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setElapsed({ days, hours, minutes, seconds });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: elapsed.days },
    { label: "Hours", value: elapsed.hours },
    { label: "Minutes", value: elapsed.minutes },
    { label: "Seconds", value: elapsed.seconds },
  ];

  return (
    <section className="py-24 px-6 bg-rose-light">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.5em] uppercase text-gold-dark mb-4">
          Counting Every Moment
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-12">
          Loving You For
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {units.map((u) => (
            <div
              key={u.label}
              className="parchment-bg rounded-lg p-6 border border-gold/20"
            >
              <div className="font-serif text-4xl sm:text-5xl font-bold text-gold-dark">
                {u.value.toLocaleString()}
              </div>
              <div className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mt-2">
                {u.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveCountdown;
