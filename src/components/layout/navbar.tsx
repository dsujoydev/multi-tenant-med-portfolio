import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="text-2xl font-bold">Med Portfolio</div>
      <div className="flex items-center gap-4">
        <UserButton />
        {/* <OrganizationSwitcher afterSelectOrganizationUrl="/org/:slug" /> */}
      </div>
    </nav>
  );
};

export default Navbar;
