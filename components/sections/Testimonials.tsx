"use client";

import * as React from "react";

const QUOTES = [
  {
    q: "Powerful approach exceptionally delivered. I feel I already better understand myself and colleagues and feel more confident.",
    a: "Maya R.",
    r: "Director, healthcare",
  },
  {
    q: "It gave me language for things I'd been feeling for years — and a path forward.",
    a: "Daniel K.",
    r: "Parent of two",
  },
  {
    q: "The most useful self-assessment I've taken. The follow-up exercises actually worked.",
    a: "Priya S.",
    r: "Educator",
  },
  {
    q: "Our whole family uses it. The shared dashboard sparked real conversations.",
    a: "The Whitlocks",
    r: "Family of four",
  },
  {
    q: "Research-backed and human. A rare combination.",
    a: "Dr. Elena V.",
    r: "Clinical psychologist",
  },
];

const STATS = [
  { n: "5M+", l: "individuals served" },
  { n: "97%", l: "report actionable insights" },
  { n: "40+", l: "countries worldwide" },
];

export function Testimonials({ id }: { id?: string }) {
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setIdx((i) => (i + 1) % QUOTES.length),
      6500
    );
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section
      id={id}
      className="relative overflow-hidden px-6 sm:px-8 lg:px-12 py-20 lg:py-[80px]"
      style={{ background: "var(--tm-green-light)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="marble-bg marble-veins absolute rounded-full pointer-events-none"
        style={{
          top: -80,
          left: "50%",
          marginLeft: -180,
          width: 240,
          height: 240,
          opacity: 0.08,
          filter: "blur(20px)",
        }}
      />

      <div className="relative mx-auto max-w-[980px] text-center">
        <div data-reveal className="tm-eyebrow mb-7">
          ABOUT · TRUSTED VOICES
        </div>

        <div className="relative min-h-[260px] sm:min-h-[220px]">
          {QUOTES.map((qq, i) => (
            <div
              key={i}
              className={`${
                i === idx ? "relative" : "absolute"
              } top-0 left-0 right-0 transition-all duration-[600ms] ease-out`}
              style={{
                opacity: i === idx ? 1 : 0,
                transform: i === idx ? "translateY(0)" : "translateY(8px)",
                pointerEvents: i === idx ? "auto" : "none",
              }}
              aria-hidden={i !== idx}
            >
              <div
                className="font-serif italic text-[22px] sm:text-[28px] lg:text-[32px] leading-[1.4] text-[#1a1f1c] max-w-[820px] mx-auto"
                style={{ letterSpacing: "-0.005em" }}
              >
                &ldquo;{qq.q}&rdquo;
              </div>
              <div
                className="mt-7 text-[14px] font-medium"
                style={{ color: "rgba(26,31,28,0.7)" }}
              >
                {qq.a}{" "}
                <span
                  className="font-light"
                  style={{ color: "rgba(26,31,28,0.5)" }}
                >
                  · {qq.r}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2.5 justify-center mt-8">
          {QUOTES.map((_, i) => (
            <button
              key={i}
              aria-label={`Show quote ${i + 1}`}
              onClick={() => setIdx(i)}
              className="rounded-full border-none p-0 cursor-pointer transition-all duration-[250ms]"
              style={{
                width: i === idx ? 24 : 8,
                height: 8,
                background: i === idx ? "var(--tm-green)" : "rgba(26,31,28,0.2)",
              }}
            />
          ))}
        </div>

        <div
          className="mx-auto"
          style={{
            height: "0.5px",
            background: "rgba(26,31,28,0.1)",
            margin: "64px auto 56px",
          }}
        />

        <div
          data-reveal
          data-reveal-stagger
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {STATS.map((s) => (
            <div key={s.l}>
              <div
                className="font-serif leading-none"
                style={{
                  fontSize: 64,
                  color: "var(--tm-green)",
                  letterSpacing: "-0.02em",
                }}
              >
                {s.n}
              </div>
              <div
                className="text-[14px] font-light mt-3"
                style={{ color: "rgba(26,31,28,0.7)" }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
