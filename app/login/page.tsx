"use client";

import * as React from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { LogoGlyph } from "@/components/ui/LogoGlyph";

export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [remember, setRemember] = React.useState(true);
  const [showPw, setShowPw] = React.useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Welcome back. (demo)");
  };

  return (
    <div
      className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2"
      style={{ background: "var(--tm-bg)" }}
    >
      {/* Form side */}
      <div className="flex flex-col p-8 sm:p-12 lg:p-14">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[14px] text-[#1a1f1c] hover:text-[var(--tm-green)] transition-colors no-underline"
        >
          <Icon name="arrowLeft" size={16} />
          Back to home
        </Link>

        <div className="max-w-[380px] w-full m-auto py-10">
          <div className="flex items-center gap-2.5 mb-9">
            <LogoGlyph size={28} color="#1a1f1c" />
            <span className="font-serif text-[22px] text-[#1a1f1c]">
              Terrace Metrics
            </span>
          </div>

          <h1
            className="font-serif text-[32px] sm:text-[40px] text-[#1a1f1c] m-0 leading-[1.15]"
            style={{ letterSpacing: "-0.01em" }}
          >
            Welcome{" "}
            <span className="italic" style={{ color: "var(--tm-green)" }}>
              back.
            </span>
          </h1>
          <p
            className="font-light mt-3 mb-9 text-[15px] sm:text-[16px]"
            style={{ color: "rgba(26,31,28,0.65)" }}
          >
            Sign in to continue your resilience journey.
          </p>

          <form onSubmit={submit} className="flex flex-col gap-[18px]">
            <div>
              <label className="block text-[13px] font-medium text-[#1a1f1c] mb-2">
                Email
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2">
                  <Icon
                    name="mail"
                    size={18}
                    color="rgba(26,31,28,0.4)"
                  />
                </span>
                <input
                  className="tm-input pl-[42px]"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-[13px] font-medium text-[#1a1f1c]">
                  Password
                </label>
                <a
                  href="#"
                  className="text-[13px] no-underline hover:underline"
                  style={{ color: "var(--tm-green)" }}
                >
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2">
                  <Icon
                    name="lock"
                    size={18}
                    color="rgba(26,31,28,0.4)"
                  />
                </span>
                <input
                  className="tm-input"
                  type={showPw ? "text" : "password"}
                  placeholder="••••••••"
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  required
                  style={{ paddingLeft: 42, paddingRight: 64 }}
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-[12px] font-medium hover:text-[var(--tm-green)] transition-colors"
                  style={{ color: "rgba(26,31,28,0.55)" }}
                >
                  {showPw ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-[13px] mt-1">
              <label className="inline-flex items-center gap-2.5 cursor-pointer text-[#1a1f1c]">
                <span
                  className="inline-flex items-center justify-center cursor-pointer transition-all"
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 4,
                    border: remember
                      ? "0.5px solid var(--tm-green)"
                      : "0.5px solid rgba(0,0,0,0.25)",
                    background: remember ? "var(--tm-green)" : "transparent",
                  }}
                  onClick={() => setRemember(!remember)}
                >
                  {remember && (
                    <Icon
                      name="check"
                      size={11}
                      color="#fff"
                      strokeWidth={3}
                    />
                  )}
                </span>
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="btn-primary mt-2"
              style={{ width: "100%", justifyContent: "center", height: 50 }}
            >
              Sign in
            </button>
          </form>

          <div
            className="flex items-center gap-3 my-5 text-[12px]"
            style={{ color: "rgba(26,31,28,0.4)" }}
          >
            <span
              className="flex-1 h-px"
              style={{ background: "rgba(0,0,0,0.1)" }}
            />
            or continue with
            <span
              className="flex-1 h-px"
              style={{ background: "rgba(0,0,0,0.1)" }}
            />
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <button className="sso-btn">
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>
            <button className="sso-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#1a1f1c">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Apple
            </button>
          </div>

          <p
            className="text-[14px] text-center mt-7"
            style={{ color: "rgba(26,31,28,0.65)" }}
          >
            New here?{" "}
            <Link
              href="/#pricing"
              className="font-medium no-underline"
              style={{ color: "var(--tm-green)" }}
            >
              Start your assessment
            </Link>
          </p>
        </div>
        <div
          className="text-[12px] text-center"
          style={{ color: "rgba(26,31,28,0.4)" }}
        >
          © 2026 Terrace Metrics
        </div>
      </div>

      {/* Marble side */}
      <div className="marble-bg marble-veins relative overflow-hidden hidden lg:block">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(140deg, rgba(31,53,39,0.65) 0%, rgba(74,124,89,0.30) 60%, rgba(143,165,144,0.20) 100%)",
          }}
        />
        <div className="relative z-[1] h-full flex flex-col p-14 text-white">
          <div className="flex items-center gap-2.5">
            <LogoGlyph size={26} color="#fff" />
            <span className="font-serif text-[20px] text-white">
              Terrace Metrics
            </span>
          </div>
          <div
            className="font-serif italic mt-auto max-w-[460px]"
            style={{ fontSize: 32, lineHeight: 1.35 }}
          >
            &ldquo;Powerful approach exceptionally delivered. I feel I already
            better understand myself and feel more confident.&rdquo;
          </div>
          <div
            className="mt-4 font-light text-[14px]"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Maya R. · Director, healthcare
          </div>

          <div className="mt-9 flex gap-7">
            {[
              { n: "5M+", l: "served" },
              { n: "97%", l: "actionable insights" },
              { n: "40+", l: "countries" },
            ].map((s) => (
              <div key={s.l}>
                <div
                  className="font-serif text-[36px] leading-none"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {s.n}
                </div>
                <div
                  className="text-[12px] font-light mt-1.5"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
