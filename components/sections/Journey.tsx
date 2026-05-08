"use client";

const STEPS = [
  { n: 1, t: "Assess", d: "Complete a science-backed assessment of your resilience" },
  { n: 2, t: "Insight", d: "Understand your strengths and areas for growth" },
  { n: 3, t: "Develop", d: "Follow personalized exercises and workshops" },
  { n: 4, t: "Track Progress", d: "See how your resilience evolves over time" },
];

export function Journey() {
  const goPricing = () =>
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="px-6 sm:px-8 lg:px-12 py-20 lg:py-[100px] text-center"
      style={{ background: "var(--tm-bg)" }}
    >
      <div className="mx-auto max-w-[1152px]">
        <div data-reveal className="tm-eyebrow mb-3.5">
          YOUR JOURNEY
        </div>
        <h2
          data-reveal
          className="font-serif text-[34px] sm:text-[40px] lg:text-[48px] leading-[1.15] text-[#1a1f1c] m-0 mb-12 lg:mb-16"
          style={{ letterSpacing: "-0.01em" }}
        >
          A simple system for lasting change
        </h2>

        <div
          data-reveal
          data-reveal-stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4 max-w-[920px] mx-auto"
        >
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="relative h-14 mb-5">
                <div
                  className="mx-auto rounded-full font-serif flex items-center justify-center bg-white relative z-[1]"
                  style={{
                    width: 56,
                    height: 56,
                    border: "1px solid var(--tm-green)",
                    color: "var(--tm-green)",
                    fontSize: 24,
                  }}
                >
                  {s.n}
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className="hidden lg:block absolute"
                    style={{
                      top: 28,
                      left: "calc(50% + 36px)",
                      right: "-50%",
                      height: "0.5px",
                      background: "rgba(74,124,89,0.4)",
                    }}
                  />
                )}
              </div>
              <div className="text-[17px] font-medium text-[#1a1f1c] mb-2">
                {s.t}
              </div>
              <div
                className="text-[13px] font-light leading-[1.55] mx-auto max-w-[200px]"
                style={{ color: "rgba(26,31,28,0.6)" }}
              >
                {s.d}
              </div>
            </div>
          ))}
        </div>

        <button onClick={goPricing} className="btn-primary mt-14">
          Start Your Assessment
        </button>
      </div>
    </section>
  );
}
