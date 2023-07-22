import { UserProfile, auth } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";

export default function Home() {
    const { userId, orgId, orgRole, orgSlug } = auth();
    if (!userId) {
        redirect("/sign-in");
    }
    return (
        <div className="flex flex-col">
            <div>In org: {orgId} {orgRole} {orgSlug}</div>
            <Link href="/create-org">Create an org</Link>
            <Link href="/view-org">View my org</Link>
            <Link href="/switch-orgs">Switch org</Link>
            <Link href="/get-facts">Show facts</Link>
            <UserProfile />
            <SignOutButton />
        </div>
    );
}
