"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { GOAL_MAPPINGS } from "@/lib/goalData";

type Props = {
  selectedGoals: Set<string>;
  onBack: () => void;
};

export function AssessmentIntro({ selectedGoals, onBack }: Props) {
  const router = useRouter();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const selectedGoalData = Array.from(selectedGoals)
    .map((gid) => ({ id: gid, ...GOAL_MAPPINGS[gid] }))
    .filter((g) => g.name);

  const strengthSet = new Set<string>();
  const advSet = new Set<string>();
  selectedGoalData.forEach((g) => {
    g.indicators.strengths.forEach((s) => strengthSet.add(s.name));
    g.indicators.adversity.forEach((a) => advSet.add(a.name));
  });
  const totalIndicators = strengthSet.size + advSet.size;
  const estQuestions = Math.max(24, totalIndicators * 4);
  const estMinutes = Math.max(8, Math.round((estQuestions * 20) / 60));

  return (
    <section
      style={{ background: "var(--tm-bg)", minHeight: "100vh" }}
      className="px-6 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[880px] py-20 lg:pt-[120px] lg:pb-20">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 bg-transparent border-none p-0 cursor-pointer text-[14px] font-medium text-[#1a1f1c] mb-12 transition-colors hover:text-[var(--tm-green)]"
        >
          <Icon name="arrowLeft" size={18} /> Back to your path
        </button>

        <div className="text-center mb-16">
          <div className="tm-eyebrow mb-4">BEFORE YOU BEGIN</div>
          <h1
            className="font-serif text-[44px] sm:text-[52px] lg:text-[64px] text-[#1a1f1c] m-0 leading-[1.05]"
            style={{ letterSpacing: "-0.015em" }}
          >
            Take a breath.{" "}
            <em
              className="font-serif"
              style={{ color: "var(--tm-green)" }}
            >
              Be honest.
            </em>
          </h1>
          <p
            className="font-light text-[16px] lg:text-[19px] max-w-[600px] mx-auto mt-6"
            style={{ color: "rgba(26,31,28,0.7)", lineHeight: 1.6 }}
          >
            There are no right or wrong answers — only the ones that are true
            for you today. Your responses are private and never shared.
          </p>
        </div>

        <div
          className="mb-8"
          style={{
            background: "#fff",
            borderRadius: 14,
            border: "0.5px solid rgba(0,0,0,0.08)",
            padding: 40,
          }}
        >
          <div className="tm-eyebrow mb-4">What to expect</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <Stat
              label="Questions"
              value={`${estQuestions}`}
              sub="Quick, single-tap responses"
            />
            <Stat
              label="Time"
              value={`~${estMinutes} min`}
              sub="Pause and resume any time"
            />
            <Stat
              label="Indicators"
              value={`${totalIndicators}`}
              sub="Measured across two dimensions"
            />
          </div>
        </div>

        <div
          className="mb-10"
          style={{
            background: "#fff",
            borderRadius: 14,
            border: "0.5px solid rgba(0,0,0,0.08)",
            padding: 40,
          }}
        >
          <h3 className="font-serif text-[20px] sm:text-[24px] text-[#1a1f1c] m-0 mb-6">
            A few things to keep in mind
          </h3>
          <div className="flex flex-col gap-5">
            <Tip
              n="01"
              title="Answer for right now, not who you want to be"
              body="Your responses reflect this season of life. They will change — that's the point."
            />
            <Tip
              n="02"
              title="Trust your first instinct"
              body="If a question feels true, it probably is. Don't overthink — go with your gut."
            />
            <Tip
              n="03"
              title="Find a quiet moment"
              body="A few minutes without interruption gives you the most useful results."
            />
          </div>
        </div>

        <div
          className="flex items-center gap-4 mb-12"
          style={{
            padding: "20px 28px",
            background: "var(--tm-green-light)",
            borderRadius: 14,
            border: "0.5px solid rgba(74,124,89,0.2)",
          }}
        >
          <div
            className="flex items-center justify-center flex-shrink-0"
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "#fff",
              border: "0.5px solid rgba(74,124,89,0.15)",
            }}
          >
            <Icon name="lock" size={20} color="var(--tm-green)" />
          </div>
          <div>
            <div className="text-[14px] font-medium text-[#1a1f1c] mb-0.5">
              Your answers are confidential
            </div>
            <div
              className="text-[13px] font-light"
              style={{ color: "rgba(26,31,28,0.7)" }}
            >
              Encrypted in transit and at rest. We never sell or share your
              data.
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => alert("Assessment flow — coming next.")}
            className="btn-primary"
            style={{ padding: "18px 52px", fontSize: 17 }}
          >
            Begin the assessment{" "}
            <Icon name="arrowRight" size={18} color="#fff" />
          </button>
          <div className="mt-4 flex justify-center gap-5 flex-wrap">
            {selectedGoalData.map((g) => (
              <div
                key={g.id}
                className="inline-flex items-center gap-2 text-[12px]"
                style={{ color: "rgba(26,31,28,0.55)" }}
              >
                <Icon name={g.icon} size={14} color="var(--tm-green)" />{" "}
                {g.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div
      className="border-l pl-5"
      style={{ borderColor: "rgba(0,0,0,0.08)" }}
    >
      <div
        className="text-[11px] uppercase mb-2"
        style={{
          color: "rgba(26,31,28,0.5)",
          letterSpacing: "0.8px",
        }}
      >
        {label}
      </div>
      <div
        className="font-serif leading-none mb-2"
        style={{
          fontSize: 36,
          color: "var(--tm-green)",
          letterSpacing: "-0.01em",
        }}
      >
        {value}
      </div>
      <div
        className="text-[13px] font-light"
        style={{ color: "rgba(26,31,28,0.6)", lineHeight: 1.5 }}
      >
        {sub}
      </div>
    </div>
  );
}

function Tip({
  n,
  title,
  body,
}: {
  n: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-5 items-start">
      <div
        className="font-serif italic flex-shrink-0 leading-none pt-0.5"
        style={{
          fontSize: 24,
          color: "var(--tm-green)",
          width: 40,
        }}
      >
        {n}
      </div>
      <div>
        <div className="text-[15px] sm:text-[16px] font-medium text-[#1a1f1c] mb-1">
          {title}
        </div>
        <div
          className="text-[14px] font-light"
          style={{ color: "rgba(26,31,28,0.7)", lineHeight: 1.6 }}
        >
          {body}
        </div>
      </div>
    </div>
  );
}
