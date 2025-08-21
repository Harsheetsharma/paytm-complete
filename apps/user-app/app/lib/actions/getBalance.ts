"use server";
import prisma from "@repo/db/client";
import { authOptions } from "../auth";
import { getServerSession } from "next-auth";

export default async function GetBalanceComponent() {
    const session = await getServerSession(authOptions);
    const userid = session?.user?.id;

    if (!userid) {
        return {
            message: "Not Authorized!"
        }
    }

    try {
        const response = await prisma.balance.findFirst({
            where: {
                userId: Number(userid),
            },
        });

        const amount = response?.amount ?? 0;
        return {
            amount: amount
        };
    } catch (e) {
        return {
            error: e
        }
    }
}
