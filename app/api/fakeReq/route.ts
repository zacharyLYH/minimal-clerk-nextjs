import { auth, clerkClient } from "@clerk/nextjs";
import { headers } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
    const { userId, orgId } = auth();
    const ret = { userId, orgId };
    if (orgId) {
        const memberships =
            await clerkClient.organizations.getOrganizationMembershipList({
                organizationId: orgId,
            });
        let authorized = false;
        for (const mem of memberships) {
            if (mem.publicUserData?.userId === userId) {
                authorized = true;
                break;
            }
        }
        if (!authorized) {
            console.log("UNAUTHORIZED_FAKEREQ");
            return new NextResponse("Unauthorized", { status: 401 });
        }
        return NextResponse.json(memberships);
    } else {
        return new NextResponse("No org ID", { status: 404 });
    }
};
