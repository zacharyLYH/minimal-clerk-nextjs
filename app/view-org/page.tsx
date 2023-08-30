import { auth } from "@clerk/nextjs";
import Link from "next/link";

const OrganizationProfilePage = async () => {
    const { userId } = auth();
    const response = await fetch(
        `https://api.clerk.com/v1/users/${userId}/organization_memberships`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.CLERK_BEARER}`,
            },
        }
    );
    const data = await response.json();
    const getAllMembershipsForUser = data.data;
    return (
        <div>
            <Link href="/">Dashboard</Link>
            <h2>All the organizations this user is a member of:</h2>
            {getAllMembershipsForUser.map((org: any) => (
                <ul key={org.organization.name}>
                    <li>
                        {org.organization.name}&nbsp;&nbsp;&nbsp;&nbsp;
                        {/* Add multiple spaces */}
                        {org.organization.id}
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default OrganizationProfilePage;
