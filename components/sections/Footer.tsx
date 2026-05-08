import { LogoGlyph } from "@/components/ui/LogoGlyph";

const COLS = [
  { h: "PRODUCT", l: ["Assessments", "Dashboard", "Exercises", "Workshops"] },
  { h: "COMPANY", l: ["About", "Science", "Research", "Careers"] },
  { h: "LEGAL", l: ["Privacy", "Terms", "Security", "Accessibility"] },
];

export function Footer() {
  return (
    <footer
      className="px-6 sm:px-8 lg:px-12 pt-[72px] pb-10"
      style={{ background: "#1a1f1c" }}
    >
      <div className="mx-auto max-w-[1280px] grid grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 lg:gap-16">
        <div className="col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <LogoGlyph size={26} color="#fff" />
            <span className="font-serif text-[22px] text-white">
              Terrace Metrics
            </span>
          </div>
          <div
            className="text-[14px] font-light mt-3.5 max-w-[280px]"
            style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}
          >
            Science-backed resilience for everyone.
          </div>
        </div>
        {COLS.map((c) => (
          <div key={c.h} className="flex flex-col gap-3.5">
            <div
              className="text-[11px] uppercase font-medium mb-1"
              style={{
                letterSpacing: "1.5px",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              {c.h}
            </div>
            {c.l.map((it) => (
              <a
                key={it}
                className="text-[14px] cursor-pointer transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {it}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div
        className="mx-auto"
        style={{
          height: "0.5px",
          background: "rgba(255,255,255,0.08)",
          margin: "56px auto 24px",
          maxWidth: 1280,
        }}
      />
      <div
        className="text-[13px] text-center"
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        © 2026 Terrace Metrics. All rights reserved.
      </div>
    </footer>
  );
}
