"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { user, isLoaded } = useUser();
  const organizationLength = user?.organizationMemberships?.length || 0;
  const firstOrganization = user?.organizationMemberships?.[0]?.organization;
  const slug = firstOrganization?.slug;

  console.log(slug, "slug");
  console.log(user, "user");

  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return; // Wait for user data to load

    if (organizationLength === 0) {
      router.push("/onboarding");
    } else if (slug) {
      router.push(`/org/${slug}`);
    } else {
      router.push("/dashboard");
    }
  }, [isLoaded, organizationLength, slug, router]);

  // Show loading state while user data is being fetched
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return <div>Redirecting...</div>;
}
