"use client";

import { Icon } from "@/components/ui/Icon";

type Plan = {
  name: string;
  price: string;
  sub: string;
  feats: string[];
  featured: boolean;
  shaftMinHeight: number;
};

const PLANS: Plan[] = [
  {
    name: "Child",
    price: "1",
    sub: "For parents who want clarity and guidance",
    feats: [
      "Child-specific assessment (Ages 8–17)",
      "Parent dashboard access",
      "Evidence-based tools & resources",
      "Developmental insights",
      "Guidance for supporting your child",
      "Progress tracking",
    ],
    featured: false,
    shaftMinHeight: 540,
  },
  {
    name: "Adult",
    price: "2",
    sub: "For personal insight and tracking",
    feats: [
      "Complete resilience assessment",
      "Personalized resilience profile",
      "Access to evidence-based tools",
      "Progress tracking dashboard",
      "Monthly insights & reports",
    ],
    featured: false,
    shaftMinHeight: 630,
  },
  {
    name: "Family",
    price: "3",
    sub: "For a shared view of resilience in the household",
    feats: [
      "Everything in Adult and Child plans",
      "Up to 5 family members (add-ons available)",
      "Individual profiles for each member",
      "Family resilience dashboard",
      "Family insights & recommendations",
      "Priority support",
    ],
    featured: true,
    shaftMinHeight: 660,
  },
];

export function Pricing({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative overflow-hidden px-6 sm:px-8 lg:px-12 py-20 lg:py-[72px]"
      style={{ background: "var(--tm-bg)" }}
    >
      <div className="relative mx-auto max-w-[1152px] text-center">
        <div data-reveal className="tm-eyebrow mb-3.5">
          PRICING · PLANS
        </div>
        <h2
          data-reveal
          className="font-serif text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.1] text-[#1a1f1c] m-0"
          style={{ letterSpacing: "-0.01em" }}
        >
          Choose the path that{" "}
          <span className="italic" style={{ color: "var(--tm-green)" }}>
            fits your life
          </span>
        </h2>

        <div
          data-reveal
          data-reveal-stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.05fr] gap-6 lg:gap-[22px] items-end mt-16 lg:mt-10"
        >
          {PLANS.map((p) => (
            <PricingColumn key={p.name} plan={p} />
          ))}
        </div>

        <div className="mt-12 lg:mt-10 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-baseline gap-2 text-[15px] text-[#1a1f1c] transition-colors"
          >
            <span style={{ color: "rgba(26,31,28,0.7)" }}>
              Not sure yet?
            </span>
            <span
              className="relative"
              style={{ color: "var(--tm-green)" }}
            >
              Try our sample assessment
              <span
                aria-hidden="true"
                className="absolute left-0 right-0"
                style={{
                  bottom: -2,
                  height: 1,
                  background: "rgba(74,124,89,0.35)",
                }}
              />
            </span>
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
              style={{ color: "var(--tm-green)" }}
            >
              →
            </span>
          </a>
        </div>

        <div
          className="text-[14px] mt-6 lg:mt-5"
          style={{ color: "rgba(26,31,28,0.6)" }}
        >
          No subscription traps · Cancel anytime · Your data is private
        </div>
      </div>
    </section>
  );
}

function PricingColumn({ plan: p }: { plan: Plan }) {
  return (
    <div className="relative card-hover" style={{ paddingTop: 28 }}>
      {/* Capital */}
      <div
        className="absolute z-[2] flex items-center justify-center"
        style={{
          top: 0,
          left: -10,
          right: -10,
          height: 36,
          background: p.featured ? "var(--tm-green)" : "#fff",
          border: p.featured ? "none" : "0.5px solid rgba(0,0,0,0.1)",
          borderRadius: "4px 4px 16px 16px",
          boxShadow: p.featured
            ? "0 8px 24px rgba(74,124,89,0.30)"
            : "0 2px 8px rgba(0,0,0,0.04)",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          color: p.featured ? "#fff" : "rgba(26,31,28,0.4)",
        }}
      >
        {p.featured ? "★ Most Popular" : ""}
      </div>

      {/* Shaft */}
      <div
        className="relative flex flex-col text-left"
        style={{
          background: p.featured ? "var(--tm-green-light)" : "#fff",
          border: p.featured
            ? "1px solid rgba(74,124,89,0.35)"
            : "0.5px solid rgba(0,0,0,0.08)",
          borderRadius: "8px",
          padding: "44px 32px 36px",
          boxShadow: p.featured ? "0 12px 40px rgba(74,124,89,0.12)" : "none",
          minHeight: p.shaftMinHeight,
        }}
      >
        {/* Fluting hairlines */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            left: 0,
            right: 0,
            top: 28,
            bottom: 80,
            background:
              "linear-gradient(90deg, transparent 32%, rgba(74,124,89,0.05) 32%, rgba(74,124,89,0.05) 32.5%, transparent 32.5%, transparent 67%, rgba(74,124,89,0.05) 67%, rgba(74,124,89,0.05) 67.5%, transparent 67.5%)",
          }}
        />

        <div className="font-serif text-[32px] lg:text-[34px] text-[#1a1f1c] text-center">
          {p.name}
        </div>
        <div
          className="text-[14px] font-light text-center mt-2 min-h-[40px]"
          style={{ color: "rgba(26,31,28,0.6)" }}
        >
          {p.sub}
        </div>

        <div className="flex items-baseline justify-center mt-7">
          <span className="font-serif text-[30px] text-[#1a1f1c]">$</span>
          <span
            className="font-serif text-[64px] text-[#1a1f1c] leading-none"
            style={{ letterSpacing: "-0.02em" }}
          >
            {p.price}
          </span>
          <span className="text-[16px] text-[#1a1f1c] ml-1">/month</span>
        </div>
        <div
          className="text-[13px] text-center mt-1.5"
          style={{ color: "rgba(26,31,28,0.6)" }}
        >
          Billed annually
        </div>

        <div className="h-5" />

        <div className="flex flex-col gap-3.5 flex-1">
          {p.feats.map((f) => (
            <div
              key={f}
              className="flex items-start gap-3 text-[14px] text-[#1a1f1c]"
              style={{ lineHeight: 1.45 }}
            >
              <span
                className="inline-flex items-center justify-center flex-shrink-0 mt-0.5 rounded-full"
                style={{
                  width: 18,
                  height: 18,
                  background: "var(--tm-green)",
                }}
              >
                <Icon name="check" size={11} color="#fff" strokeWidth={3} />
              </span>
              <span>{f}</span>
            </div>
          ))}
        </div>

        <button
          className={p.featured ? "btn-primary" : "btn-secondary"}
          style={{ marginTop: 32, width: "100%", justifyContent: "center" }}
        >
          Get started
        </button>

        {/* Base */}
        <div
          className="absolute"
          style={{
            left: -10,
            right: -10,
            bottom: -10,
            height: 16,
            background: p.featured ? "var(--tm-green-dark)" : "#fff",
            border: p.featured ? "none" : "0.5px solid rgba(0,0,0,0.1)",
            borderRadius: "16px 16px 4px 4px",
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
}
