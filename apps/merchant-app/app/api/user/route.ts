import { NextResponse } from "next/server"
// import { PrismaClient } from "@repo/db/client";
import db from "@repo/db/client"

// const client = new PrismaClient();

export const GET = async () => {
    await db.user.create({
        data: {
            email: "asd",
            name: "adsads",
            number: "7345788423",
            password: "lskdjflkj"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}