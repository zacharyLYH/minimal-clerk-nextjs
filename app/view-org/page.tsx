"use client"

import { OrganizationProfile } from "@clerk/clerk-react";
import Link from "next/link";

const OrganizationProfilePage = () => {
    return (
        <div>
            <Link href="/">Dashboard</Link>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <OrganizationProfile />
            </div>
        </div>
    );
};

export default OrganizationProfilePage;
