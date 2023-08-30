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
        <div className="flex flex-col gap-y-2">
            {/* <div>
                In org: {orgId} {orgRole} {orgSlug}
            </div> */}
            {/* <Link href="/create-org">Create an org</Link> */}
            <Link href="/create-org-with-api">Create org with API</Link>
            <Link href="/view-org">View all my org(s)</Link>
            <Link href="/delete-org">Delete org</Link>
            {/* <Link href="/switch-orgs">Switch org</Link>
            <Link href="/get-facts">Show facts</Link> */}
            {/* <UserProfile /> */}
            <SignOutButton />
        </div>
    );
}
