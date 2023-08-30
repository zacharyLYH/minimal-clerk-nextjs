"use client";

const DeleteOrg = () => {
    async function onSubmit(orgId: string) {
        try {
            await fetch(`https://api.clerk.com/v1/organizations/${orgId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${process.env.CLERK_BEARER}`,
                },
            });
            alert("Succesfully deleted org");
        } catch (error) {
            alert(error);
        }
    }

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const orgId = formData.get("organizationName") as string;

        await onSubmit(orgId);
    }
    return (
        <section>
            <h1 className="text-lg font-bold">Delete an org by orgId</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="organizationName"
                    className="text-black"
                />
                <button type="submit" className="bg-blue-200">
                    Delete organization
                </button>
            </form>
        </section>
    );
};

export default DeleteOrg;
