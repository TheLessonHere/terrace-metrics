import * as React from "react";

type Props = {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
};

export function LogoGlyph({
  size = 28,
  color = "#1a1f1c",
  style,
  className,
}: Props) {
  const h = (size * 267) / 300;
  return (
    <span
      role="img"
      aria-label="Terrace Metrics"
      className={className}
      style={{
        display: "inline-block",
        width: size,
        height: h,
        background: color,
        WebkitMaskImage: "url(/assets/logonotext.png)",
        maskImage: "url(/assets/logonotext.png)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        ...style,
      }}
    />
  );
}
