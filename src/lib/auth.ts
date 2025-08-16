import { auth } from "@clerk/nextjs/server";
import { db } from "@/db";
import { organizations } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function checkOnboardingStatus() {
  const { userId } = await auth();

  if (!userId) {
    return { isAuthenticated: false, hasCompletedOnboarding: false };
  }

  // Check if user has created an organization
  const userOrganizations = await db.select().from(organizations).where(eq(organizations.createdBy, userId)).limit(1);

  const hasCompletedOnboarding = userOrganizations.length > 0;

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
