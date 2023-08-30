"use client";

import { useOrganizationList } from "@clerk/nextjs";
import Link from "next/link";

const CreateOrgWithApi = () => {
    const { createOrganization } = useOrganizationList();

    async function onSubmit(orgName: string) {
        try {
            createOrganization!({ name: orgName });
            alert("Succesfully created new org with API!");
        } catch (error) {
            alert(error);
        }
    }

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const orgName = formData.get("organizationName") as string;

        await onSubmit(orgName);
    }

    return (
        <div>
            <Link href="/" className="p-2 rounded-md bg-slate-400">
                Back to dashboard
            </Link>
            <h1 className="text-lg font-bold">
                Create a new org using an API call
            </h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="organizationName"
                    className="text-black"
                />
                <button type="submit" className="bg-blue-200">
                    Create organization
                </button>
            </form>
        </div>
    );
};

export default CreateOrgWithApi;
