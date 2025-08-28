"use server";
import prisma from "@repo/db/client";
import { authOptions } from "../auth";
import { getServerSession } from "next-auth";
import { randomUUID } from "crypto";
import { error } from "console";

export async function P2Ptransfer(number: string, amount: number) {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    if (!userId) {
        return {
            message: "unauthorized user"
        }
    }
    else {
        try {
            const receiver = await prisma.user.findFirst({
                where: {
                    number: number
                }
            })
            if (!receiver) {
                return {
                    message: "user not found!"
                }

            }
            await prisma.$transaction(async (tx: any) => {
                await tx.$queryRaw`SELECT * FROM "Balance" Where "userId" = ${Number(userId)} FOR UPDATE`;
                const fromBalance = await tx.balance.findUnique({
                    where: { userId: Number(userId) },
                });
                if (!fromBalance || fromBalance.amount < amount) {
                    throw new Error('Insufficient funds');
                }
                await tx.balance.update({
                    where: { userId: Number(userId) },
                    data: { amount: { decrement: amount } },
                });
                await tx.balance.upsert({
                    where: { userId: receiver.id },
                    update: { amount: { increment: amount } },
                    create: {
                        userId: receiver.id,
                        amount: amount,
                        locked: 0
                    }
                });
                await tx.p2pTransfer.create({
                    data: {
                        toUserId: Number(receiver.id),
                        fromUserId: Number(userId),
                        amount: amount,
                        timestampt: new Date()
                    }
                })
            });
            return {
                message: "Transfer was successfull"
            }
        }
        catch (e: any) {
            console.error("transfer error", e);
            throw e;

        }
    }

}
