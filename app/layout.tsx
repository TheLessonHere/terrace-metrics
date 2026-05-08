import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terrace Metrics — Strengthen what matters",
  description:
    "A science-backed system that helps you understand, build, and track resilience at every stage of life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
