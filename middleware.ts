import { authMiddleware, clerkClient } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
    afterAuth(auth, req, evt) {
        // console.log(auth.orgId, auth.orgRole)
        const verifyUser = async () => {
            if (auth.orgId) {
                const memberships =
                    await clerkClient.organizations.getOrganizationMembershipList(
                        { organizationId: auth.orgId }
                    );
                console.log(memberships[0].publicUserData?.userId);
            }
        };
        verifyUser();
    },
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
