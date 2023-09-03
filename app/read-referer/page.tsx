"use client";

import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
    const [referrer, setReferrer] = useState("");
    const ButtonHandler = async () => {
        try {
            const resp = await fetch("/api/readReferrer"); // Use the full URL to your API route
            if (resp.ok) {
                const data = await resp.json(); // Await and parse the JSON response
                setReferrer(data.message);
            } else {
                console.error("Failed to fetch referrer data");
            }
        } catch (error) {
            console.error(
                "An error occurred while fetching referrer data:",
                error
            );
        }
    };

    return (
        <div>
            <Link href="/">Back to dashboard</Link>
            {referrer !== "" && <p>{referrer}</p>}
            <button onClick={ButtonHandler}>Click me</button>
        </div>
    );
}
