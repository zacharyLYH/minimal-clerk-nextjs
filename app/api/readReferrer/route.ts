import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
    const headersList = headers();
    const referer = headersList.get("referer");
    return NextResponse.json({ message: referer });
};
