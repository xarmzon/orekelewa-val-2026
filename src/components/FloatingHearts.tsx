import { useState } from "react";

const FloatingHearts = () => {
  const [hearts] = useState(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 20,
      duration: 10 + Math.random() * 12,
      delay: Math.random() * 10,
    }));
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute float-heart"
          style={{
            left: `${h.left}%`,
            bottom: "-10px",
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          ♥
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
