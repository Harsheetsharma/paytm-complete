"use server";
import prisma from "@repo/db/client";
import { authOptions } from "../auth";
import { getServerSession } from "next-auth";
import { randomUUID } from "crypto";
export async function dataCall(amount: number, provider: string) {
  const session = await getServerSession(authOptions);
  const userId = session.user.id;
  if (!userId) {
    return {
      message: "unauthorized user"
    }
  }
  else {
    await prisma.onRampTransaction.create({
      data: {
        userId: Number(session.user.id),
        token: randomUUID(),
        status: "Processing",
        startTime: new Date(),
        provider: `${provider}`,
        amount: amount,
      },
    });
  }
}
