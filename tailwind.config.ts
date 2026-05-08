import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tm: {
          green: "#4a7c59",
          "green-dark": "#3d6649",
          "green-light": "#f5f9f6",
          "green-accent": "#8fa590",
          bg: "#fafaf8",
          "bg-warm": "#f5f0e8",
          ink: "#1a1f1c",
          deep: "#1f3527",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "DM Serif Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "DM Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.08)",
        cta: "0 4px 14px rgba(74,124,89,0.25)",
        "cta-lg": "0 8px 28px rgba(74,124,89,0.32)",
        widget: "0 30px 80px rgba(28,43,58,0.25), 0 8px 24px rgba(0,0,0,0.08)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 600ms ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
