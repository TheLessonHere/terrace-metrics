"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { PersonalizedResults } from "@/components/sections/PersonalizedResults";
import { loadGoals } from "@/lib/selectedGoals";

export default function PersonalizedResultsPage() {
  const router = useRouter();
  const [selectedGoals, setSelectedGoals] = React.useState<Set<string>>(
    new Set()
  );
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    setSelectedGoals(loadGoals());
    setHydrated(true);
  }, []);

  React.useEffect(() => {
    if (hydrated && selectedGoals.size === 0) {
      router.replace("/#personalize");
    }
  }, [hydrated, selectedGoals, router]);

  if (!hydrated || selectedGoals.size === 0) {
    return (
      <>
        <Nav />
        <div
          className="min-h-screen flex items-center justify-center"
          style={{ background: "var(--tm-bg)" }}
        >
          <div
            className="text-[14px]"
            style={{ color: "rgba(26,31,28,0.5)" }}
          >
            Loading…
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <PersonalizedResults
        selectedGoals={selectedGoals}
        onBack={() => router.push("/#personalize")}
      />
      <Footer />
    </>
  );
}
