"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Personalize } from "@/components/sections/Personalize";
import { Outcomes } from "@/components/sections/Outcomes";
import { Journey } from "@/components/sections/Journey";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { CTAFlow, BigCTA } from "@/components/sections/CTAFlow";
import { Footer } from "@/components/sections/Footer";
import { useReveal } from "@/lib/useReveal";
import { loadGoals, saveGoals } from "@/lib/selectedGoals";

export default function LandingPage() {
  const router = useRouter();
  const [selectedGoals, setSelectedGoals] = React.useState<Set<string>>(
    new Set()
  );

  useReveal();

  React.useEffect(() => {
    setSelectedGoals(loadGoals());
  }, []);

  const toggleGoal = (gid: string) => {
    setSelectedGoals((prev) => {
      const next = new Set(prev);
      if (next.has(gid)) next.delete(gid);
      else next.add(gid);
      saveGoals(next);
      return next;
    });
  };

  const handleContinue = () => {
    saveGoals(selectedGoals);
    router.push("/personalized-results");
  };

  return (
    <>
      <Nav />
      <Hero />
      <Personalize
        id="personalize"
        selected={selectedGoals}
        onToggle={toggleGoal}
        onContinue={handleContinue}
      />
      <Outcomes id="outcomes" />
      <Journey />
      <Features id="features" />
      <Testimonials id="about" />
      <Pricing id="pricing" />
      <CTAFlow />
      <BigCTA />
      <Footer />
    </>
  );
}
