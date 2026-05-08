"use client";

import { Icon, type IconName } from "@/components/ui/Icon";

const ITEMS: { icon: IconName; t: string; d: string }[] = [
  { icon: "bar", t: "Resilience profile", d: "Detailed insights across mental fitness, stress, grit, and more" },
  { icon: "trend", t: "Interactive dashboard", d: "Track your progress and see trends over time" },
  { icon: "target", t: "Guided exercises", d: "Science-backed practices tailored to your needs" },
  { icon: "cap", t: "Workshops & sessions", d: "Expert-led content on resilience topics" },
  { icon: "users", t: "Family view", d: "Support and track resilience for your whole family" },
  { icon: "smartphone", t: "Ongoing tracking", d: "Regular check-ins to measure growth and adjust your path" },
  { icon: "book", t: "Resource library", d: "Articles, guides, and worksheets curated by clinicians" },
  { icon: "microscope", t: "Research updates", d: "Quarterly findings from our research partners" },
  { icon: "shield", t: "Private by design", d: "Your data is encrypted, never sold, and yours to delete" },
];

export function Features({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="bg-white px-6 sm:px-8 lg:px-12 py-20 lg:py-[100px]"
    >
      <div className="mx-auto max-w-[1152px]">
        <div data-reveal className="tm-eyebrow mb-3.5">
          EVERYTHING INCLUDED · RESOURCES
        </div>
        <h2
          data-reveal
          className="font-serif text-[34px] sm:text-[40px] lg:text-[48px] leading-[1.15] text-[#1a1f1c] m-0 mb-3"
          style={{ letterSpacing: "-0.01em" }}
        >
          Everything you need in one place
        </h2>
        <p
          data-reveal
          className="font-light text-[16px] lg:text-[18px] max-w-[580px] mb-14"
          style={{ color: "rgba(26,31,28,0.65)" }}
        >
          A complete toolkit for understanding and building resilience — for
          yourself or your whole family.
        </p>
        <div
          data-reveal
          data-reveal-stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {ITEMS.map((it) => (
            <div
              key={it.t}
              className="rounded-2xl p-7 lg:p-[30px] card-hover"
              style={{
                background: "var(--tm-bg-warm)",
                border: "0.5px solid rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 12px 32px rgba(0,0,0,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="flex items-center justify-center mb-5"
                style={{
                  width: 46,
                  height: 46,
                  background: "#fff",
                  borderRadius: 12,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <Icon name={it.icon} size={22} color="var(--tm-green)" />
              </div>
              <div className="text-[18px] font-medium text-[#1a1f1c] mb-2">
                {it.t}
              </div>
              <div
                className="text-[14px] font-light leading-[1.55]"
                style={{ color: "rgba(26,31,28,0.7)" }}
              >
                {it.d}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
