"use client";

import * as React from "react";

const ITEMS = [
  {
    n: "01",
    t: "Emotional Stability",
    d: "Navigate challenges with clarity instead of feeling overwhelmed by uncertainty.",
  },
  {
    n: "02",
    t: "Sustained energy",
    d: "Maintain focus and motivation without burnout, even during demanding times.",
  },
  {
    n: "03",
    t: "Improved physical health",
    d: "Build the mental foundation that supports better sleep, stress management, and overall well-being.",
  },
  {
    n: "04",
    t: "Direction and purpose",
    d: "Connect daily actions to what matters most, creating meaning in both big and small moments.",
  },
  {
    n: "05",
    t: "Strengthened Connection",
    d: "More capacity to support the people who matter most — family, friends, and colleagues.",
  },
];

export function Outcomes({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative overflow-hidden px-6 sm:px-8 lg:px-12 py-20 lg:py-[120px]"
      style={{ background: "var(--tm-bg-warm)" }}
    >
      <img
        src="/assets/logonotext.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none hidden lg:block"
        style={{
          right: 40,
          top: 60,
          width: 200,
          opacity: 0.07,
          filter: "brightness(0) saturate(100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1152px]">
        <div data-reveal className="tm-eyebrow mb-3.5">
          WHAT CHANGES · THE SCIENCE
        </div>
        <h2
          data-reveal
          className="font-serif text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.1] text-[#1a1f1c] m-0 max-w-[760px]"
          style={{ letterSpacing: "-0.01em" }}
        >
          What happens when your{" "}
          <span className="italic" style={{ color: "var(--tm-green)" }}>
            resilience
          </span>{" "}
          improves
        </h2>
        <p
          data-reveal
          className="font-light text-[16px] lg:text-[18px] mt-5 max-w-[600px]"
          style={{ color: "rgba(26,31,28,0.65)" }}
        >
          Five outcomes consistently observed across our peer-reviewed research
          with over 5 million participants.
        </p>

        <div
          data-reveal
          data-reveal-stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mt-14 items-stretch"
        >
          {ITEMS.map((it) => (
            <ColumnCard key={it.n} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ColumnCard({ n, t, d }: { n: string; t: string; d: string }) {
  return (
    <div className="relative" style={{ paddingTop: 24, paddingBottom: 14 }}>
      {/* Abacus */}
      <div
        className="absolute z-[3]"
        style={{
          top: 0,
          left: -14,
          right: -14,
          height: 8,
          background: "linear-gradient(180deg, #fff 0%, #f6f4ee 100%)",
          border: "0.5px solid rgba(0,0,0,0.08)",
          borderBottom: "none",
          borderRadius: "2px 2px 0 0",
          boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
        }}
      />
      {/* Echinus */}
      <div
        className="absolute z-[2]"
        style={{
          top: 8,
          left: -10,
          right: -10,
          height: 16,
          background:
            "linear-gradient(180deg, #fbfaf6 0%, #fff 50%, #f3f0e8 100%)",
          border: "0.5px solid rgba(0,0,0,0.07)",
          borderTop: "none",
          borderRadius: "0 0 14px 14px",
        }}
      />
      {/* Shaft */}
      <div
        className="relative overflow-hidden flex flex-col card-hover"
        style={{
          background:
            "linear-gradient(90deg, #f5f2ea 0%, #fbf9f3 12%, #fff 50%, #fbf9f3 88%, #f0ece2 100%)",
          border: "0.5px solid rgba(0,0,0,0.07)",
          borderTop: "none",
          padding: "30px 18px 26px",
          minHeight: 320,
        }}
      >
        {/* Vertical fluting */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0, transparent 14px, rgba(0,0,0,0.05) 14px, rgba(0,0,0,0.05) 15px, transparent 15px, transparent 17px, rgba(255,255,255,0.6) 17px, rgba(255,255,255,0.6) 18px)",
            mixBlendMode: "multiply",
            opacity: 0.55,
          }}
        />
        {/* Marble veining */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 400'><filter id='v'><feTurbulence type='fractalNoise' baseFrequency='0.012' numOctaves='3' seed='7'/><feColorMatrix values='0 0 0 0 0.6  0 0 0 0 0.55  0 0 0 0 0.5  0 0 0 0.18 0'/></filter><rect width='100%25' height='100%25' filter='url(%23v)'/></svg>\")",
            backgroundSize: "cover",
            mixBlendMode: "multiply",
            opacity: 0.45,
          }}
        />
        <div className="relative z-[1] flex flex-col flex-1">
          <div
            className="font-serif leading-none mb-5"
            style={{ fontSize: 36, color: "rgba(74,124,89,0.55)" }}
          >
            {n}
          </div>
          <div className="text-[16px] font-medium text-[#1a1f1c] mb-2 leading-[1.3]">
            {t}
          </div>
          <div
            className="text-[13px] font-light leading-[1.55] flex-1"
            style={{ color: "rgba(26,31,28,0.7)" }}
          >
            {d}
          </div>
        </div>
      </div>
      {/* Torus */}
      <div
        className="absolute z-[2]"
        style={{
          bottom: 6,
          left: -10,
          right: -10,
          height: 14,
          background:
            "linear-gradient(180deg, #f3f0e8 0%, #fff 50%, #fbfaf6 100%)",
          border: "0.5px solid rgba(0,0,0,0.07)",
          borderBottom: "none",
          borderRadius: "14px 14px 0 0",
        }}
      />
      {/* Plinth */}
      <div
        className="absolute z-[3]"
        style={{
          bottom: 0,
          left: -14,
          right: -14,
          height: 6,
          background: "linear-gradient(180deg, #f6f4ee 0%, #fff 100%)",
          border: "0.5px solid rgba(0,0,0,0.08)",
          borderTop: "none",
          borderRadius: "0 0 2px 2px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        }}
      />
    </div>
  );
}
