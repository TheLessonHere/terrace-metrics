"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { AssessmentIntro } from "@/components/sections/AssessmentIntro";
import { loadGoals } from "@/lib/selectedGoals";

export default function AssessmentPage() {
  const router = useRouter();
  const [selectedGoals, setSelectedGoals] = React.useState<Set<string>>(
    new Set()
  );
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    setSelectedGoals(loadGoals());
    setHydrated(true);
  }, []);

  return (
    <>
      <Nav />
      <AssessmentIntro
        selectedGoals={hydrated ? selectedGoals : new Set()}
        onBack={() =>
          selectedGoals.size > 0
            ? router.push("/personalized-results")
            : router.push("/#personalize")
        }
      />
      <Footer />
    </>
  );
}
