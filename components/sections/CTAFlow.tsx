"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Icon, type IconName } from "@/components/ui/Icon";

const GOALS: { id: string; icon: IconName; t: string; d: string }[] = [
  { id: "me", icon: "user", t: "Just me", d: "Personal growth" },
  { id: "child", icon: "smile", t: "My child", d: "Ages 8–17" },
  { id: "family", icon: "users", t: "My family", d: "All ages" },
];

const PLANS: { id: string; icon: IconName; n: string; d: string; p: string }[] = [
  { id: "child", icon: "smile", n: "Child", d: "Age-appropriate assessment", p: "$1/mo" },
  { id: "adult", icon: "user", n: "Adult", d: "Individual assessment and insights", p: "$2/mo" },
  { id: "family", icon: "users", n: "Family", d: "Up to 5 family members", p: "$3/mo" },
];

export function CTAFlow() {
  const router = useRouter();
  const [step, setStep] = React.useState(1);
  const [goal, setGoal] = React.useState("family");
  const [plan, setPlan] = React.useState("family");
  const [email, setEmail] = React.useState("");
  const [pw, setPw] = React.useState("");

  const next = () => {
    if (step < 4) setStep(step + 1);
    else router.push("/assessment");
  };
  const back = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <section
      className="px-6 sm:px-8 lg:px-12 py-20 lg:py-[100px] text-center"
      style={{ background: "var(--tm-bg-warm)" }}
    >
      <div className="mx-auto max-w-[720px]">
        <div data-reveal className="tm-eyebrow mb-3.5">
          GET STARTED
        </div>
        <h2
          data-reveal
          className="font-serif text-[34px] sm:text-[40px] lg:text-[48px] leading-[1.15] text-[#1a1f1c] m-0 mb-11"
          style={{ letterSpacing: "-0.01em" }}
        >
          Begin your resilience journey
        </h2>

        <div
          data-reveal
          className="rounded-[18px] overflow-hidden text-left bg-white"
          style={{
            border: "0.5px solid rgba(0,0,0,0.06)",
            boxShadow: "0 8px 28px rgba(0,0,0,0.05)",
          }}
        >
          {/* Progress */}
          <div
            role="progressbar"
            aria-valuenow={step}
            aria-valuemin={1}
            aria-valuemax={4}
            aria-label={`Step ${step} of 4`}
            style={{ height: 3, background: "var(--tm-bg-warm)" }}
          >
            <div
              style={{
                width: `${step * 25}%`,
                height: "100%",
                background: "var(--tm-green)",
                transition: "width 500ms ease",
              }}
            />
          </div>

          <div className="p-7 lg:p-10">
            {step === 1 && (
              <Step1 active={goal} onChange={setGoal} />
            )}
            {step === 2 && (
              <Step2 active={plan} onChange={setPlan} />
            )}
            {step === 3 && (
              <Step3
                email={email}
                pw={pw}
                setEmail={setEmail}
                setPw={setPw}
              />
            )}
            {step === 4 && <Step4 />}

            <div className="flex justify-between items-center mt-8">
              {step > 1 ? (
                <button
                  onClick={back}
                  className="bg-transparent border-none p-1.5 cursor-pointer text-[14px] font-medium inline-flex items-center gap-1.5 transition-colors"
                  style={{ color: "rgba(26,31,28,0.6)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--tm-ink)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(26,31,28,0.6)")
                  }
                >
                  <Icon name="arrowLeft" size={14} color="currentColor" />
                  Back
                </button>
              ) : (
                <div />
              )}

              <button onClick={next} className="btn-primary !py-3 !px-7 !text-[14px]">
                {step === 4 ? (
                  "Begin Assessment"
                ) : (
                  <>
                    Continue <Icon name="arrowRight" size={16} color="#fff" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function selStyle(active: boolean): React.CSSProperties {
  return {
    border: active
      ? "2px solid var(--tm-green)"
      : "0.5px solid rgba(0,0,0,0.12)",
    background: active ? "#f5f9f6" : "#fff",
  };
}

function Step1({
  active,
  onChange,
}: {
  active: string;
  onChange: (id: string) => void;
}) {
  return (
    <>
      <div className="font-serif text-[24px] sm:text-[28px] text-[#1a1f1c] mb-6">
        Who is this for?
      </div>
      <div
        role="radiogroup"
        aria-label="Who is this for?"
        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        {GOALS.map((o) => {
          const a = active === o.id;
          return (
            <button
              key={o.id}
              role="radio"
              aria-checked={a}
              onClick={() => onChange(o.id)}
              className="rounded-[14px] p-6 text-center cursor-pointer transition-all duration-200 hover:-translate-y-[2px]"
              style={selStyle(a)}
            >
              <Icon name={o.icon} size={40} color="var(--tm-green)" />
              <div className="text-[16px] font-medium text-[#1a1f1c] mt-2">
                {o.t}
              </div>
              <div
                className="text-[13px] mt-1"
                style={{ color: "rgba(26,31,28,0.6)" }}
              >
                {o.d}
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}

function Step2({
  active,
  onChange,
}: {
  active: string;
  onChange: (id: string) => void;
}) {
  return (
    <>
      <div className="font-serif text-[24px] sm:text-[28px] text-[#1a1f1c] mb-1.5">
        Choose your plan
      </div>
      <div
        className="text-[14px] font-light mb-6"
        style={{ color: "rgba(26,31,28,0.6)" }}
      >
        Billed annually
      </div>
      <div role="radiogroup" aria-label="Choose your plan" className="flex flex-col gap-3">
        {PLANS.map((p) => {
          const a = active === p.id;
          return (
            <button
              key={p.id}
              role="radio"
              aria-checked={a}
              onClick={() => onChange(p.id)}
              className="rounded-[14px] p-4 flex items-center gap-4 w-full text-left cursor-pointer transition-all duration-200"
              style={selStyle(a)}
            >
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: 48, height: 48 }}
              >
                <Icon name={p.icon} size={32} color="var(--tm-green)" />
              </div>
              <div className="flex-1">
                <div className="text-[16px] font-medium text-[#1a1f1c]">
                  {p.n}
                </div>
                <div
                  className="text-[13px] mt-0.5"
                  style={{ color: "rgba(26,31,28,0.6)" }}
                >
                  {p.d}
                </div>
              </div>
              <div className="font-serif text-[18px] text-[#1a1f1c] flex-shrink-0">
                {p.p}
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}

function Step3({
  email,
  pw,
  setEmail,
  setPw,
}: {
  email: string;
  pw: string;
  setEmail: (v: string) => void;
  setPw: (v: string) => void;
}) {
  return (
    <>
      <div className="font-serif text-[24px] sm:text-[28px] text-[#1a1f1c] mb-6">
        Create your account
      </div>
      <div className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="tm-input"
          style={{ borderRadius: 999 }}
        />
        <input
          type="password"
          placeholder="Password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="tm-input"
          style={{ borderRadius: 999 }}
        />
      </div>
      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px" style={{ background: "rgba(0,0,0,0.12)" }} />
        <div className="text-[13px]" style={{ color: "rgba(26,31,28,0.5)" }}>
          or
        </div>
        <div className="flex-1 h-px" style={{ background: "rgba(0,0,0,0.12)" }} />
      </div>
      <button
        type="button"
        className="w-full py-3 px-5 rounded-full bg-transparent text-[14px] font-medium text-[#1a1f1c] cursor-pointer inline-flex items-center justify-center gap-2.5 transition-colors"
        style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#f9f9f9")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true">
          <path
            fill="#FFC107"
            d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35.5 24 35.5c-6.4 0-11.5-5.1-11.5-11.5S17.6 12.5 24 12.5c2.9 0 5.6 1.1 7.7 2.9l5.7-5.7C33.6 6.3 29 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.3-.3-3.5z"
          />
          <path
            fill="#FF3D00"
            d="M6.3 14.7l6.6 4.8C14.6 15.9 19 12.5 24 12.5c2.9 0 5.6 1.1 7.7 2.9l5.7-5.7C33.6 6.3 29 4.5 24 4.5 16.4 4.5 9.8 8.6 6.3 14.7z"
          />
          <path
            fill="#4CAF50"
            d="M24 43.5c5 0 9.5-1.7 12.9-4.5l-6-5.1c-1.9 1.3-4.3 2.1-6.9 2.1-5.3 0-9.7-3.1-11.3-7.5l-6.5 5C9.7 39.4 16.3 43.5 24 43.5z"
          />
          <path
            fill="#1976D2"
            d="M43.6 20.5H42V20H24v8h11.3c-.7 2-2 3.7-3.6 4.9l6 5.1c-.4.4 6.6-4.8 6.6-14 0-1.2-.1-2.3-.3-3.5z"
          />
        </svg>
        Continue with Google
      </button>
    </>
  );
}

function Step4() {
  return (
    <div className="text-center py-8">
      <div className="inline-flex mb-6" style={{ color: "var(--tm-green)" }}>
        <Icon name="leaf" size={64} color="var(--tm-green)" strokeWidth={1.5} />
      </div>
      <div className="font-serif text-[28px] sm:text-[32px] text-[#1a1f1c] mb-3">
        You're ready to begin
      </div>
      <div
        className="font-light text-[15px] sm:text-[16px] mb-8"
        style={{ color: "rgba(26,31,28,0.7)" }}
      >
        Your personalized resilience assessment is ready
      </div>
      <div className="flex flex-col gap-4 max-w-[380px] mx-auto text-left">
        {[
          "10–15 minutes to complete",
          "Completely confidential",
          "No right or wrong answers",
        ].map((t) => (
          <div key={t} className="flex items-center gap-3">
            <div
              className="rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                width: 20,
                height: 20,
                background: "var(--tm-green)",
              }}
            >
              <Icon name="check" size={12} color="#fff" strokeWidth={3} />
            </div>
            <div className="text-[15px] text-[#1a1f1c]">{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BigCTA() {
  return (
    <section className="marble-bg marble-veins relative overflow-hidden px-6 sm:px-8 lg:px-12 py-24 lg:py-[120px] text-center">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--tm-green)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,0,0,0.15), transparent 70%)",
        }}
      />
      <img
        src="/assets/logonotext.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          left: "50%",
          top: 30,
          transform: "translateX(-50%)",
          width: 200,
          opacity: 0.16,
        }}
      />
      <div className="relative z-[1] mx-auto max-w-[760px]">
        <h2
          data-reveal
          className="font-serif text-[40px] sm:text-[48px] lg:text-[60px] leading-[1.1] text-white m-0"
          style={{ letterSpacing: "-0.015em" }}
        >
          Start building <span className="italic">stronger</span> resilience
          today
        </h2>
        <p
          data-reveal
          className="font-light text-[16px] lg:text-[18px] mt-6"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          Join millions who have strengthened their mental fitness and
          well-being
        </p>
        <button
          className="btn-light"
          style={{ marginTop: 40, padding: "16px 36px", fontSize: 16 }}
        >
          Start Your Assessment
        </button>
      </div>
    </section>
  );
}
