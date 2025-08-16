"use client";

import { redirect } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();
  const organizationLength = user?.organizationMemberships.length;
  if (organizationLength === 0) {
    redirect("/onboarding");
  }

  redirect("/dashboard");
}
