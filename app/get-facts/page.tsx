"use client";

import { useAuth } from "@clerk/nextjs";
import { OrganizationMembership } from "@clerk/nextjs/dist/types/server/clerkClient";
import Link from "next/link";
import { useState } from "react";

const ShowFacts = () => {
    const [error, setError] = useState("");
    const [facts, setFacts] = useState<OrganizationMembership[]>([]);
    const { orgId } = useAuth();
    const fetcher = async () => {
        if(orgId === null){
            return new Error("You don't belong to this ORG!")
        }
        try {
            const data = await fetch("/api/fakeReq");
            setFacts(await data.json());
            setError("");
        } catch (error) {
            console.log("ERROR FOUND");
            setError("Error found");
            setFacts([]);
        }
    };
    return (
        <div className="flex flex-col">
            <Link href="/">Dashboard</Link>
            {/* {orgId !== null && (<p>This org is: {orgId}</p>)} */}
            <button onClick={fetcher}>Show facts</button>
            {facts.length > 0 &&
                facts.map((fact) => (
                    <div key={fact.id}>
                        {fact.publicUserData?.firstName},{" "}
                        {fact.publicUserData?.userId}
                    </div>
                ))}
            {error.length > 0 && <p>{error}</p>}
        </div>
    );
};

export default ShowFacts;
