import React, { useEffect, useState } from "react";

export default function FullPageCarousel({ slides = [], autoPlayMs = 5000 }) {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(next, autoPlayMs);
    return () => clearInterval(id);
  }, [slides.length, autoPlayMs]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-800 text-white">
      <div
        className="flex h-full transition-transform duration-700"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => (
          <section
            key={i}
            className="w-full flex-shrink-0 h-full flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url('${s.image}')` }}
          >
            <div className="bg-black/40 p-6 rounded-lg max-w-2xl text-center">
              <h1 className="text-4xl md:text-6xl font-bold">{s.title}</h1>
              <p className="mt-4 text-lg md:text-2xl">{s.subtitle}</p>
            </div>
          </section>
        ))}
      </div>
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 p-3 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 p-3 rounded-full"
      >
        ›
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
