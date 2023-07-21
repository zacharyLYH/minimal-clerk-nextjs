import { auth } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";

export default function Home() {
    const { userId } = auth();
    if (!userId) {
        redirect("/sign-in");
    }
    return (
        <div className="flex flex-col">
            <Link href="/create-org">Create an org</Link>
            <Link href="/view-org">View my org</Link>
            <Link href="/switch-orgs">Switch org</Link>
            <SignOutButton />
        </div>
    );
}
