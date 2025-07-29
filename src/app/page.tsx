"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/login");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">AI-Powered Resume Tailor</h1>
        <p className="mb-6 text-lg text-muted-foreground">
          Instantly optimize your resume for any job.
        </p>
        <Button size="lg" onClick={handleGetStarted}>
          Get Started
        </Button>
      </div>
    </main>
  );
}