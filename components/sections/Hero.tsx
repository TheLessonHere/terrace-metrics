"use client";

import * as React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Icon } from "@/components/ui/Icon";

export function Hero() {
  const root = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".hero-pill", {
        opacity: 0,
        y: 14,
        duration: 0.7,
        ease: "power2.out",
      });
      gsap.from(".hero-title", {
        opacity: 0,
        y: 24,
        duration: 0.9,
        delay: 0.1,
        ease: "power3.out",
      });
      gsap.from(".hero-lede", {
        opacity: 0,
        y: 18,
        duration: 0.8,
        delay: 0.25,
        ease: "power2.out",
      });
      gsap.from(".hero-cta > *", {
        opacity: 0,
        y: 14,
        duration: 0.7,
        delay: 0.4,
        stagger: 0.08,
        ease: "power2.out",
      });
      gsap.from(".hero-tag", {
        opacity: 0,
        y: 8,
        duration: 0.6,
        delay: 0.55,
        stagger: 0.06,
        ease: "power2.out",
      });
      gsap.from(".hero-widget", {
        opacity: 0,
        y: 30,
        scale: 0.98,
        duration: 1.0,
        delay: 0.2,
        ease: "power3.out",
      });
    },
    { scope: root }
  );

  const goPricing = () =>
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="top"
      ref={root}
      className="marble-bg marble-veins relative overflow-hidden text-white"
      style={{ paddingTop: 100, paddingBottom: 120 }}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--tm-green)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(15,28,20,0.22)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,0,0,0.18), transparent 70%)",
        }}
      />

      {/* Background logo motifs */}
      <img
        src="/assets/logonotext.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none hidden md:block"
        style={{ right: -60, bottom: -80, width: 540, opacity: 0.08 }}
      />
      <img
        src="/assets/logonotext.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none hidden md:block"
        style={{ left: 24, top: 44, width: 200, opacity: 0.06 }}
      />

      {/* Cream curve into next section */}
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="absolute left-0 right-0 w-full pointer-events-none"
        style={{ bottom: -1, height: 60 }}
      >
        <path d="M0 60 L1440 60 L1440 30 Q720 0 0 30 Z" fill="#fff" />
      </svg>

      <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
        <div>
          <span
            className="hero-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-medium tracking-[0.5px]"
            style={{
              background: "rgba(255,255,255,0.10)",
              color: "#d8e6dc",
              border: "0.5px solid rgba(255,255,255,0.15)",
            }}
          >
            <Icon name="sparkle" size={13} color="#a8d4b4" />
            Backed by 30+ years of research
          </span>
          <h1
            className="hero-title font-serif text-[44px] sm:text-[56px] lg:text-[68px] leading-[1.05] mt-5"
            style={{ letterSpacing: "-0.015em" }}
          >
            Resilience{" "}
            <span className="italic" style={{ color: "#a8d4b4" }}>
              For You.
            </span>
            <br />
            Strengthen what matters.
          </h1>
          <p
            className="hero-lede font-sans font-light text-[17px] sm:text-[19px] leading-[1.6] mt-6 max-w-[500px]"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            A science-backed system that helps you understand, build, and track
            resilience at every stage of life.
          </p>
          <div className="hero-cta flex flex-wrap items-center gap-3 mt-8">
            <button className="btn-light" onClick={goPricing}>Start Your Resilience Journey</button>
            <span
              className="font-serif italic text-[16px] inline-flex items-center justify-center mt-8"
              style={{
                color: "rgba(255,255,255,0.55)",
                width: 16,
              }}
            >
              or
            </span>
            <button className="btn-ghost-light">Take Our Sample Assessment</button>
          </div>
          <div className="flex flex-wrap gap-2.5 mt-9">
            {["5M+ individuals served", "Research-validated", "Global reach"].map(
              (t) => (
                <span
                  key={t}
                  className="hero-tag inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px]"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "0.5px solid rgba(255,255,255,0.18)",
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "#a8d4b4" }}
                  />
                  {t}
                </span>
              )
            )}
          </div>
        </div>
        <div className="hero-widget flex justify-center lg:justify-end">
          <HeroWidget />
        </div>
      </div>
    </section>
  );
}

function HeroWidget() {
  const [score, setScore] = React.useState({ a: 0, b: 0, c: 0 });

  React.useEffect(() => {
    const targets = { a: 78, b: 82, c: 54 };
    const start = performance.now();
    const dur = 1700;
    let raf = 0;
    const step = (t: number) => {
      const k = Math.min(1, (t - start) / dur);
      const e = 1 - Math.pow(1 - k, 3);
      setScore({
        a: Math.round(targets.a * e),
        b: Math.round(targets.b * e),
        c: Math.round(targets.c * e),
      });
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const tiles = [
    { v: score.a, l: "Mental Fitness", b: "STRONG", c: "#7adb8a", bg: "#1e3d2a" },
    { v: score.b, l: "Overall Resiliency", b: "SATISFACTORY", c: "#7adb8a", bg: "#1e3d2a" },
    { v: score.c, l: "Overall Adversity", b: "ELEVATED", c: "#e8a020", bg: "#3a2a10" },
  ];

  const focus = [
    { l: "Stress", v: 54, b: "PRIORITY", c: "#e8a020", bg: "#3a2a10", dot: "#e8a020" },
    { l: "Grit", v: 81, b: "STRENGTH", c: "#7adb8a", bg: "#1e3d2a", dot: "#7adb8a" },
    { l: "Leadership", v: 74, b: "EXPLORE", c: "#7aafcc", bg: "#162433", dot: "#7aafcc" },
  ];

  return (
    <div
      className="rounded-[22px] p-6 sm:p-7 font-sans w-full max-w-[460px]"
      style={{
        background: "#1c2b3a",
        boxShadow: "0 30px 80px rgba(28,43,58,0.25), 0 8px 24px rgba(0,0,0,0.08)",
        border: "0.5px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="flex gap-3.5">
        {tiles.map((t, i) => (
          <div
            key={i}
            className="flex-1 rounded-xl p-3.5"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "0.5px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="font-serif leading-none"
              style={{ fontSize: 38, color: t.c }}
            >
              {t.v}
            </div>
            <div
              className="text-[11px] mt-1.5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {t.l}
            </div>
            <span
              className="inline-block mt-2 px-2.5 py-[3px] rounded-full text-[9px] font-medium uppercase tracking-[0.5px]"
              style={{ background: t.bg, color: t.c }}
            >
              {t.b}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <div
          className="text-[10px] uppercase tracking-[0.5px] font-medium mb-2.5"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          OVERALL MENTAL FITNESS
        </div>
        <div
          className="h-1.5 rounded-full relative"
          style={{
            background:
              "linear-gradient(90deg,#c0392b 0%,#e67e22 25%,#c8c820 50%,#27ae60 75%,#1a7a42 100%)",
          }}
        >
          <div
            className="absolute -top-[3px] w-3 h-3 rounded-full"
            style={{
              left: "62%",
              background: "#fff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
              transition: "left 1700ms cubic-bezier(0.22,0.61,0.36,1)",
            }}
          />
        </div>
        <div
          className="flex justify-between mt-2.5 text-[9px]"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          <span>May Need Assistance</span>
          <span>Slight Concern</span>
          <span>Satisfactory</span>
          <span>Optimal</span>
        </div>
      </div>

      <div
        className="mt-4 flex items-center gap-1.5 text-[13px] cursor-pointer"
        style={{ color: "rgba(255,255,255,0.85)" }}
      >
        <Icon name="plus" size={16} color="#7adb8a" />
        <span>View Individual indicators</span>
      </div>

      <div
        className="text-[10px] uppercase tracking-[0.5px] font-medium mt-5"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        FOCUS AREAS
      </div>
      <div className="flex flex-col gap-3 mt-2">
        {focus.map((r, i) => (
          <div key={i} className="flex items-center gap-3">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: r.dot }}
            />
            <span
              className="flex-1 text-[14px]"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              {r.l}
            </span>
            <span
              className="font-serif text-[18px]"
              style={{ color: r.c }}
            >
              {r.v}
            </span>
            <span
              className="px-2.5 py-[3px] rounded-full text-[9px] font-medium uppercase tracking-[0.5px]"
              style={{ background: r.bg, color: r.c }}
            >
              {r.b}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
