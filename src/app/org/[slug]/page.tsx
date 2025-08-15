import Navbar from "@/components/layout/navbar";

export default function OrgLandingPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to the Org Landing Page</h1>
      </div>
    </div>
  );
}
