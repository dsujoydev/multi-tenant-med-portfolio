import { clerkClient } from "@clerk/nextjs/server";

interface Params {
  subdomain: "string";
}

export default async function SubdomainPage({ params }: { params: Promise<Params> }) {
  const { subdomain } = await params;
  const client = await clerkClient();
  const org = await client.organizations.getOrganization({
    slug: subdomain,
  });

  const orgID = org.id;

  return (
    <div>
      <div>SubdomainPage {subdomain}</div>
      <div>Organization {org.name}</div>
    </div>
  );
}
