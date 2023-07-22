// Form to create a new organization. The current user
// will become the organization administrator.
import { useOrganizationList } from "@clerk/nextjs";
import { FormEventHandler, useState } from "react";

export default function CreateOrganization() {
  const { createOrganization } = useOrganizationList();
  const [organizationName, setOrganizationName] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    createOrganization({ name: organizationName });
    setOrganizationName("");
    alert("IT WORKED")
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="organizationName"
        value={organizationName}
        onChange={(e) => setOrganizationName(e.currentTarget.value)}
        className="text-black"
      />
      <button type="submit">Create organization</button>
    </form>
  );
}
