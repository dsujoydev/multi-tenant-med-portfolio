import { redirect } from "next/navigation";
import { checkOnboardingStatus } from "@/lib/auth";

export default async function Home() {
  const { isAuthenticated, hasCompletedOnboarding } = await checkOnboardingStatus();

  if (!isAuthenticated) {
    redirect("/sign-in");
  }

  if (!hasCompletedOnboarding) {
    redirect("/onboarding");
  }

  redirect("/dashboard");
}
