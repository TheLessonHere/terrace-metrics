"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Icon, type IconName } from "@/components/ui/Icon";
import {
  GOAL_MAPPINGS,
  ALL_STRENGTHS,
  ALL_ADVERSITY,
  type Indicator,
} from "@/lib/goalData";

type Props = {
  selectedGoals: Set<string>;
  onBack: () => void;
};

export function PersonalizedResults({ selectedGoals, onBack }: Props) {
  const router = useRouter();
  const [showAll, setShowAll] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const selectedGoalData = Array.from(selectedGoals)
    .map((gid) => ({ id: gid, ...GOAL_MAPPINGS[gid] }))
    .filter((g) => g.name);

  const selStrengthNames = new Set<string>();
  const selAdvNames = new Set<string>();
  selectedGoalData.forEach((g) => {
    g.indicators.strengths.forEach((s) => selStrengthNames.add(s.name));
    g.indicators.adversity.forEach((a) => selAdvNames.add(a.name));
  });
  const filteredStrengths = ALL_STRENGTHS.filter((s) =>
    selStrengthNames.has(s.name)
  );
  const filteredAdversity = ALL_ADVERSITY.filter((a) =>
    selAdvNames.has(a.name)
  );

  const cardStyle: React.CSSProperties = {
    background: "#fff",
    borderRadius: 14,
    border: "0.5px solid rgba(0,0,0,0.08)",
    padding: 32,
  };

  return (
    <section
      style={{ background: "var(--tm-bg)", minHeight: "100vh" }}
      className="px-6 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1100px] py-20 lg:pt-[100px] lg:pb-20">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 bg-transparent border-none p-0 cursor-pointer text-[14px] font-medium text-[#1a1f1c] mb-8 transition-colors hover:text-[var(--tm-green)]"
        >
          <Icon name="arrowLeft" size={18} /> Back to goal selection
        </button>

        <div className="text-center mb-14">
          <div className="flex justify-center flex-wrap gap-3 mb-6">
            {selectedGoalData.map((g) => (
              <div
                key={g.id}
                className="flex items-center justify-center"
                style={{
                  width: 48,
                  height: 48,
                  background: "var(--tm-green-light)",
                  borderRadius: 12,
                }}
              >
                <Icon name={g.icon} size={24} color="var(--tm-green)" />
              </div>
            ))}
          </div>
          <div className="tm-eyebrow mb-3.5">YOUR PERSONALIZED PATH</div>
          <h1
            className="font-serif text-[40px] sm:text-[48px] lg:text-[56px] text-[#1a1f1c] m-0 leading-[1.1]"
            style={{ letterSpacing: "-0.01em" }}
          >
            A path shaped by{" "}
            <em
              className="font-serif"
              style={{ color: "var(--tm-green)" }}
            >
              what matters to you
            </em>
          </h1>
          <p
            className="font-light text-[16px] lg:text-[18px] max-w-[640px] mx-auto mt-5"
            style={{ color: "rgba(26,31,28,0.7)", lineHeight: 1.6 }}
          >
            Based on your goals, here are the key indicators we'll assess and
            how you can strengthen them.
          </p>
        </div>

        <IndicatorBrowser
          filteredStrengths={filteredStrengths}
          filteredAdversity={filteredAdversity}
          showAll={showAll}
          onToggleShowAll={() => setShowAll(!showAll)}
          card={cardStyle}
        />

        {selectedGoalData.map((goal) => (
          <div key={goal.id} style={{ ...cardStyle, marginBottom: 32 }}>
            <div className="flex items-start gap-5 mb-6">
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  width: 56,
                  height: 56,
                  background: "var(--tm-green-light)",
                  borderRadius: 12,
                }}
              >
                <Icon name={goal.icon} size={28} color="var(--tm-green)" />
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-serif text-[24px] sm:text-[28px] lg:text-[32px] text-[#1a1f1c] m-0 leading-[1.2]">
                  {goal.name}
                </h3>
              </div>
            </div>

            <div className="mb-7 lg:pl-[76px]">
              <div className="tm-eyebrow mb-2.5">How to improve</div>
              <p
                className="font-light text-[15px] lg:text-[16px] m-0 max-w-[760px]"
                style={{ color: "rgba(26,31,28,0.78)", lineHeight: 1.6 }}
              >
                {goal.howToImprove}
              </p>
            </div>

            <div className="lg:pl-[76px]">
              <div className="text-[13px] font-medium text-[#1a1f1c] mb-3.5">
                Sample workshops & training
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {goal.workshops.map((w, i) => (
                  <WorkshopCard
                    key={i}
                    title={w.title}
                    type={w.type}
                    duration={w.duration}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}

        <div
          className="text-center mb-12"
          style={{
            background: "var(--tm-green-light)",
            borderRadius: 14,
            border: "0.5px solid rgba(74,124,89,0.2)",
            padding: 40,
          }}
        >
          <h3
            className="font-serif text-[24px] sm:text-[28px] lg:text-[32px] text-[#1a1f1c] m-0"
            style={{ letterSpacing: "-0.005em" }}
          >
            Your complete{" "}
            <em
              className="font-serif"
              style={{ color: "var(--tm-green)" }}
            >
              support system
            </em>
          </h3>
          <p
            className="font-light text-[15px] lg:text-[16px] mx-auto max-w-[600px]"
            style={{
              color: "rgba(26,31,28,0.7)",
              lineHeight: 1.6,
              margin: "12px auto 32px",
            }}
          >
            You'll have access to expert coaching, proven strategies, and
            interactive practice tools designed specifically for your needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[800px] mx-auto">
            <SupportTile
              icon="compass"
              title="Coaching & workshops"
              desc="Expert guidance tailored to your journey"
            />
            <SupportTile
              icon="book"
              title="Evidence-based strategies"
              desc="Science-backed methods that work"
            />
            <SupportTile
              icon="wrench"
              title="Practice tools"
              desc="Interactive exercises for daily growth"
            />
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => router.push("/#pricing")}
            className="btn-primary"
            style={{ padding: "16px 44px", fontSize: 16 }}
          >
            Start your assessment
          </button>
          <p
            className="text-[13px] mt-3.5"
            style={{ color: "rgba(26,31,28,0.55)" }}
          >
            10–15 minutes · Completely confidential · No right or wrong answers
          </p>
        </div>
      </div>
    </section>
  );
}

function IndicatorBrowser({
  filteredStrengths,
  filteredAdversity,
  showAll,
  onToggleShowAll,
  card,
}: {
  filteredStrengths: Indicator[];
  filteredAdversity: Indicator[];
  showAll: boolean;
  onToggleShowAll: () => void;
  card: React.CSSProperties;
}) {
  const strengthsList = showAll ? ALL_STRENGTHS : filteredStrengths;
  const adversityList = showAll ? ALL_ADVERSITY : filteredAdversity;

  type FlatItem = Indicator & { kind: "resilience" | "adversity" };
  const flat: FlatItem[] = [
    ...strengthsList.map((it) => ({ ...it, kind: "resilience" as const })),
    ...adversityList.map((it) => ({ ...it, kind: "adversity" as const })),
  ];
  const [selectedKey, setSelectedKey] = React.useState<string | null>(
    flat[0] ? `${flat[0].kind}:${flat[0].name}` : null
  );

  React.useEffect(() => {
    if (
      !flat.find((f) => `${f.kind}:${f.name}` === selectedKey) &&
      flat[0]
    ) {
      setSelectedKey(`${flat[0].kind}:${flat[0].name}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showAll]);

  const selected =
    flat.find((f) => `${f.kind}:${f.name}` === selectedKey) || flat[0];
  const accent =
    selected && selected.kind === "adversity"
      ? "var(--tm-warn)"
      : "var(--tm-green)";
  const accentBg =
    selected && selected.kind === "adversity"
      ? "rgba(230,126,34,0.06)"
      : "var(--tm-green-light)";

  const canFilter =
    filteredStrengths.length < ALL_STRENGTHS.length ||
    filteredAdversity.length < ALL_ADVERSITY.length;

  return (
    <div
      style={{ ...card, padding: 0, marginBottom: 32, overflow: "hidden" }}
    >
      <div
        className="flex items-end justify-between flex-wrap gap-4"
        style={{
          padding: "28px 32px 20px",
          borderBottom: "0.5px solid rgba(0,0,0,0.08)",
        }}
      >
        <div>
          <h2
            className="font-serif text-[24px] sm:text-[28px] text-[#1a1f1c] m-0"
            style={{ letterSpacing: "-0.005em" }}
          >
            The Indicators
          </h2>
          <p
            className="text-[13px] font-light mt-1.5 mb-0"
            style={{ color: "rgba(26,31,28,0.6)" }}
          >
            Browse the indicators we'll assess across two dimensions of
            resilience.
          </p>
        </div>
        {canFilter && (
          <button
            onClick={onToggleShowAll}
            className="inline-flex items-center gap-1.5 bg-transparent rounded-full px-3.5 py-2 cursor-pointer text-[12px] font-medium text-[#1a1f1c] transition-colors"
            style={{ border: "0.5px solid rgba(0,0,0,0.15)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--tm-green)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)")
            }
          >
            <Icon name={showAll ? "chevronUp" : "chevronDown"} size={14} />
            {showAll ? "All Indicators" : "My Indicators"}
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr]">
        <div
          className="lg:border-r lg:border-b-0 border-b"
          style={{
            borderColor: "rgba(0,0,0,0.08)",
            padding: "16px 0",
            background: "#fcfcfb",
            maxHeight: 320,
            overflowY: "auto",
          }}
        >
          <IndicatorMenuGroup
            title="Resilience"
            dotColor="var(--tm-green)"
            items={strengthsList}
            kind="resilience"
            selectedKey={selectedKey}
            onSelect={setSelectedKey}
          />
          <div style={{ height: 12 }} />
          <IndicatorMenuGroup
            title="Adversity"
            dotColor="var(--tm-warn)"
            items={adversityList}
            kind="adversity"
            selectedKey={selectedKey}
            onSelect={setSelectedKey}
          />
        </div>

        <div className="flex flex-col gap-3.5 px-7 py-6">
          {selected && (
            <>
              <div className="flex items-center justify-between gap-3">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full text-[11px] font-medium uppercase"
                  style={{
                    padding: "4px 10px",
                    background: accentBg,
                    color: accent,
                    letterSpacing: "0.5px",
                  }}
                >
                  <span
                    className="rounded-full"
                    style={{ width: 6, height: 6, background: accent }}
                  />
                  {selected.kind === "adversity" ? "Adversity" : "Resilience"}
                </span>
                <span
                  className="text-[11px] uppercase"
                  style={{
                    color: "rgba(26,31,28,0.45)",
                    letterSpacing: "0.5px",
                  }}
                >
                  Standardized · validated
                </span>
              </div>
              <h3
                className="font-serif text-[24px] sm:text-[28px] lg:text-[32px] text-[#1a1f1c] m-0 leading-[1.15]"
                style={{ letterSpacing: "-0.01em" }}
              >
                {selected.name}
              </h3>
              <p
                className="font-light text-[14px] lg:text-[15px] m-0 max-w-[560px]"
                style={{ color: "rgba(26,31,28,0.78)", lineHeight: 1.6 }}
              >
                {selected.desc}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function IndicatorMenuGroup({
  title,
  dotColor,
  items,
  kind,
  selectedKey,
  onSelect,
}: {
  title: string;
  dotColor: string;
  items: Indicator[];
  kind: "resilience" | "adversity";
  selectedKey: string | null;
  onSelect: (k: string) => void;
}) {
  return (
    <div>
      <div
        className="flex items-center gap-2 text-[11px] font-medium uppercase"
        style={{
          padding: "6px 24px 10px",
          color: dotColor,
          letterSpacing: "1px",
        }}
      >
        <span
          className="rounded-full"
          style={{ width: 6, height: 6, background: dotColor }}
        />
        {title}
      </div>
      <div>
        {items.map((it) => {
          const key = `${kind}:${it.name}`;
          const sel = selectedKey === key;
          return (
            <button
              key={key}
              onClick={() => onSelect(key)}
              className="flex items-center justify-between w-full text-left cursor-pointer text-[14px] transition-colors"
              style={{
                padding: "10px 24px",
                background: sel ? "#fff" : "transparent",
                border: "none",
                borderLeft: sel
                  ? `2px solid ${dotColor}`
                  : "2px solid transparent",
                fontWeight: sel ? 500 : 400,
                color: sel ? "#1a1f1c" : "rgba(26,31,28,0.72)",
              }}
              onMouseEnter={(e) => {
                if (!sel)
                  e.currentTarget.style.background = "rgba(0,0,0,0.025)";
              }}
              onMouseLeave={(e) => {
                if (!sel) e.currentTarget.style.background = "transparent";
              }}
            >
              <span>{it.name}</span>
              {sel && <Icon name="arrowRight" size={14} color={dotColor} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function WorkshopCard({
  title,
  type,
  duration,
}: {
  title: string;
  type: "workshop" | "video" | "practice";
  duration: string;
}) {
  const iconMap: Record<typeof type, IconName> = {
    workshop: "users",
    video: "play",
    practice: "book",
  };
  return (
    <div
      className="rounded-xl p-4 cursor-pointer transition-all duration-200 card-hover"
      style={{
        background: "var(--tm-bg-warm)",
        border: "0.5px solid rgba(0,0,0,0.08)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = "var(--tm-green)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)")
      }
    >
      <div className="flex items-center gap-2 mb-3">
        <Icon name={iconMap[type]} size={14} color="var(--tm-green)" />
        <span
          className="text-[11px] uppercase font-medium"
          style={{ color: "rgba(26,31,28,0.6)", letterSpacing: "0.5px" }}
        >
          {type}
        </span>
        <span className="text-[11px]" style={{ color: "rgba(26,31,28,0.4)" }}>
          ·
        </span>
        <span className="text-[11px]" style={{ color: "rgba(26,31,28,0.5)" }}>
          {duration}
        </span>
      </div>
      <div className="text-[14px] font-medium text-[#1a1f1c] leading-[1.4]">
        {title}
      </div>
    </div>
  );
}

function SupportTile({
  icon,
  title,
  desc,
}: {
  icon: IconName;
  title: string;
  desc: string;
}) {
  return (
    <div className="text-center">
      <div
        className="inline-flex items-center justify-center mb-3.5"
        style={{
          width: 48,
          height: 48,
          background: "#fff",
          borderRadius: 12,
          border: "0.5px solid rgba(74,124,89,0.15)",
        }}
      >
        <Icon name={icon} size={24} color="var(--tm-green)" />
      </div>
      <div className="text-[15px] font-medium text-[#1a1f1c] mb-1.5">
        {title}
      </div>
      <div
        className="text-[13px] font-light"
        style={{ color: "rgba(26,31,28,0.6)", lineHeight: 1.5 }}
      >
        {desc}
      </div>
    </div>
  );
}
