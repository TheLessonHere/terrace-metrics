"use client";

import * as React from "react";
import Link from "next/link";
import { LogoGlyph } from "@/components/ui/LogoGlyph";
import { Icon } from "@/components/ui/Icon";

const NAV_LINKS = [
  { l: "Plans", id: "pricing" },
  { l: "Resources", id: "features" },
  { l: "Science", id: "outcomes" },
  { l: "About", id: "about" },
];

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.href = `/#${id}`;
  };

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-200 ease-out"
      style={{
        height: 68,
        background: scrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.7)",
        backdropFilter: "saturate(140%) blur(12px)",
        WebkitBackdropFilter: "saturate(140%) blur(12px)",
        borderBottom: scrolled
          ? "0.5px solid rgba(0,0,0,0.08)"
          : "0.5px solid transparent",
      }}
    >
      <div className="mx-auto flex h-full max-w-[1280px] items-center px-6 sm:px-8 lg:px-12 font-sans">
        {/* Brand */}
        <Link
          href="/#top"
          onClick={(e) => handleClick(e, "top")}
          className="flex items-center gap-2.5 flex-1"
        >
          <LogoGlyph size={26} color="#1f3527" />
          <span className="font-serif text-[20px] text-[#1f3527]">
            Terrace Metrics
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex flex-[2] justify-center gap-10">
          {NAV_LINKS.map((n) => (
            <a
              key={n.id}
              href={`/#${n.id}`}
              onClick={(e) => handleClick(e, n.id)}
              className="nav-link"
            >
              {n.l}
            </a>
          ))}
        </div>

        {/* Right CTAs */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-4">
          <Link
            href="/login"
            className="text-[15px] font-medium text-[#1a1f1c] hover:text-[var(--tm-green)] transition-colors"
          >
            Login
          </Link>
          <a
            href="/#pricing"
            onClick={(e) => handleClick(e, "pricing")}
            className="btn-primary !px-5 !py-2.5 !text-[14px]"
          >
            Start Assessment
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden ml-auto p-2 rounded-md hover:bg-black/5 transition-colors"
        >
          <Icon name={open ? "chevronUp" : "plus"} size={22} color="#1a1f1c" />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: open ? "0.5px solid rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((n) => (
            <a
              key={n.id}
              href={`/#${n.id}`}
              onClick={(e) => handleClick(e, n.id)}
              className="py-2 text-[15px] font-medium text-[#1a1f1c]"
            >
              {n.l}
            </a>
          ))}
          <div className="h-px my-2 bg-black/10" />
          <Link
            href="/login"
            className="py-2 text-[15px] font-medium text-[#1a1f1c]"
          >
            Login
          </Link>
          <a
            href="/#pricing"
            onClick={(e) => handleClick(e, "pricing")}
            className="btn-primary !w-full !justify-center mt-2"
          >
            Start Assessment
          </a>
        </div>
      </div>
    </nav>
  );
}
