import { NextResponse } from "next/server";

export const GET = async () => {
    console.log("HIT AFTER LEAVE URL");
    return NextResponse.redirect("http://localhost:3000");
};
