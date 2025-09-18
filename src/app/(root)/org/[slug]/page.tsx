"use client";

import { AppointmentForm } from "@/components/forms/appointment-form";

export default function OrgLandingPage() {
  // const [isAppointmentFormOpen, setIsAppointmentFormOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to the Org Landing Page</h1>
        <AppointmentForm />
      </div>
    </div>
  );
}
