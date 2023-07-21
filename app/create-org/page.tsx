"use client"

import { CreateOrganization } from "@clerk/clerk-react";
import Link from "next/link";

const CreateOrganizationPage = () => {
    return (
        <div>
            <Link href="/">Dashboard</Link>
            <CreateOrganization />
        </div>
    );
};

export default CreateOrganizationPage;
