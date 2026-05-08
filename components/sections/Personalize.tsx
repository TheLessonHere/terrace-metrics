"use client";

import * as React from "react";
import { Icon } from "@/components/ui/Icon";
import { GOAL_MAPPINGS, GOAL_ORDER } from "@/lib/goalData";

type Props = {
  id?: string;
  selected: Set<string>;
  onToggle: (id: string) => void;
  onContinue: () => void;
};

export function Personalize({ id, selected, onToggle, onContinue }: Props) {
  const items = GOAL_ORDER.map((gid) => ({
    id: gid,
    icon: GOAL_MAPPINGS[gid].icon,
    t: GOAL_MAPPINGS[gid].name,
    d: GOAL_MAPPINGS[gid].description,
  }));
  const enabled = selected.size > 0;

  return (
    <section
      id={id}
      className="bg-white px-6 sm:px-8 lg:px-12 py-20 lg:py-[100px]"
    >
      <div className="mx-auto max-w-[1152px]">
        <div data-reveal className="tm-eyebrow mb-3.5">
          PERSONALIZE YOUR PATH
        </div>
        <h2
          data-reveal
          className="font-serif text-[34px] sm:text-[40px] lg:text-[48px] leading-[1.15] text-[#1a1f1c] m-0"
          style={{ letterSpacing: "-0.01em" }}
        >
          What's most on your mind right now?
        </h2>
        <p
          data-reveal
          className="text-[15px] lg:text-[16px] font-light mt-3"
          style={{ color: "rgba(26,31,28,0.6)" }}
        >
          Select all that feel true — there's no wrong answer
        </p>

        <div
          data-reveal
          data-reveal-stagger
          className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-9"
        >
          {items.map((it) => {
            const sel = selected.has(it.id);
            return (
              <button
                key={it.id}
                onClick={() => onToggle(it.id)}
                aria-pressed={sel}
                className="text-left flex gap-4 items-start rounded-[14px] p-5 sm:p-6 cursor-pointer transition-all duration-200 ease-out hover:-translate-y-[2px]"
                style={{
                  background: sel ? "rgba(74,124,89,0.06)" : "#fff",
                  border: sel
                    ? "1.5px solid var(--tm-green)"
                    : "0.5px solid rgba(0,0,0,0.12)",
                  boxShadow: sel
                    ? "0 6px 18px rgba(74,124,89,0.10)"
                    : "0 1px 0 rgba(0,0,0,0.01)",
                }}
              >
                <div
                  className="flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: sel
                      ? "var(--tm-green)"
                      : "rgba(74,124,89,0.08)",
                  }}
                >
                  <Icon
                    name={it.icon}
                    size={20}
                    color={sel ? "#fff" : "var(--tm-green)"}
                  />
                </div>
                <div className="flex-1">
                  <div className="text-[16px] font-medium text-[#1a1f1c] mb-1">
                    {it.t}
                  </div>
                  <div
                    className="text-[14px] font-light leading-[1.5]"
                    style={{ color: "rgba(26,31,28,0.6)" }}
                  >
                    {it.d}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-9 flex items-center gap-4">
          <button
            onClick={() => enabled && onContinue()}
            disabled={!enabled}
            className="btn-primary"
          >
            Continue <Icon name="arrowRight" size={16} color="#fff" />
          </button>
          {selected.size > 0 && (
            <span
              className="text-[13px]"
              style={{ color: "rgba(26,31,28,0.5)" }}
            >
              {selected.size} selected
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
