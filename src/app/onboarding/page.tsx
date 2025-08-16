import { redirect } from "next/navigation";
import { checkOnboardingStatus } from "@/lib/auth";
import OnboardingForm from "@/components/onboarding/onboarding-form";

export default async function OnboardingPage() {
  const { isAuthenticated, hasCompletedOnboarding } = await checkOnboardingStatus();

  if (!isAuthenticated) {
    redirect("/sign-in");
  }

  // if (hasCompletedOnboarding) {
  //   redirect("/dashboard");
  // }
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Complete Your Profile</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Set up your organization to get started</p>
        </div>
        <OnboardingForm />
      </div>
    </div>
  );
}
