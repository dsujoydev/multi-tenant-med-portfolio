import { auth } from "@clerk/nextjs/server";

export async function checkOnboardingStatus() {
  const { userId } = await auth();

  if (!userId) {
    return { isAuthenticated: false, hasCompletedOnboarding: false };
  }

  // For now, we'll assume onboarding is completed if user is authenticated
  // This can be enhanced later with proper organization checking
  const hasCompletedOnboarding = true;

  return {
    isAuthenticated: true,
    hasCompletedOnboarding,
    userId,
  };
}

export async function requireOnboarding() {
  const { isAuthenticated, hasCompletedOnboarding } = await checkOnboardingStatus();

  if (!isAuthenticated) {
    return { redirect: "/sign-in" };
  }

  if (!hasCompletedOnboarding) {
    return { redirect: "/onboarding" };
  }

  return { redirect: null };
}
