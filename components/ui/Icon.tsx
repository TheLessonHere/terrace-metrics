import * as React from "react";

const ICONS: Record<string, string> = {
  heart: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
  users: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
  parentChild: "M6 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M10 21v-3a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v3 M17 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M20 21v-2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2",
  briefcase: "M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
  cap: "M22 10v6 M2 10l10-5 10 5-10 5z M6 12v5c3 3 9 3 12 0v-5",
  target: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  wind: "M9.59 4.59A2 2 0 1 1 11 8H2 M12.59 19.41A2 2 0 1 0 14 16H2 M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2",
  trend: "M23 6l-9.5 9.5-5-5L1 18 M17 6h6v6",
  compass: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z",
  bar: "M3 3v18h18 M7 16V8 M12 16v-6 M17 16V4",
  user: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  smile: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M8 14s1.5 2 4 2 4-2 4-2 M9 9h.01 M15 9h.01",
  smartphone: "M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z M12 18h.01",
  check: "M20 6L9 17l-5-5",
  arrowRight: "M5 12h14 M12 5l7 7-7 7",
  arrowLeft: "M19 12H5 M12 19l-7-7 7-7",
  plus: "M12 5v14 M5 12h14",
  book: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  microscope: "M6 18h8 M3 22h18 M14 22a7 7 0 1 0 0-14h-1 M9 14h2 M9 12a2 2 0 0 1-2-2V6h4v4a2 2 0 0 1-2 2zm0 0v4 M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",
  sparkle: "M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3z",
  leaf: "M11 20A7 7 0 0 1 4 13c0-5 5-9 9-9 4 0 7 3 7 7 0 7-9 9-9 9z M2 22l9-9",
  lock: "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z M7 11V7a5 5 0 0 1 10 0v4",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M22 6l-10 7L2 6",
  play: "M5 3l14 9-14 9V3z",
  wrench: "M14.7 6.3a4 4 0 0 0 5 5l-9 9a2.83 2.83 0 1 1-4-4l9-9-1 1z",
  chevronDown: "M6 9l6 6 6-6",
  chevronUp: "M18 15l-6-6-6 6",
};

export type IconName = keyof typeof ICONS | string;

type Props = {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
};

export function Icon({
  name,
  size = 24,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: Props) {
  const d = ICONS[name];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {d.split(" M").map((seg, i) => (
        <path key={i} d={i === 0 ? seg : "M" + seg} />
      ))}
    </svg>
  );
}
