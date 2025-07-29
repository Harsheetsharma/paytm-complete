import { getServerSession } from "next-auth";
import prisma from "@repo/db/client";
import { authOptions } from "../../lib/auth";
import { Recentp2pTxn } from "../../../components/Recentp2pTxn";
type Transaction = {
  amount: number;
  timeStamp: Date;
  direction: "sent" | "received";
  counterParty: any;
};

async function getRecentp2pTxn() {
  const session = await getServerSession(authOptions);
  const userId = Number(session.user.id);
  const recentTxn = await prisma.p2pTransfer.findMany({
    where: {
      OR: [{ fromUserId: userId }, { toUserId: userId }],
    },
    include: {
      fromUser: true,
      toUser: true,
    },
  });
  return recentTxn.map(
    (t): Transaction => ({
      amount: t.amount,
      timeStamp: t.timestampt,
      direction: t.fromUserId === userId ? "sent" : "received",
      counterParty:
        t.fromUserId === userId
          ? t.toUser.name ?? "Unknown"
          : t.fromUser.name ?? "Unknown",
    })
  );
}

export default async function () {
  const recentTransaction = await getRecentp2pTxn();
  return (
    <div className="mt-5 w-1/3 ml-5">
      <Recentp2pTxn transactions={recentTransaction}></Recentp2pTxn>
    </div>
  );
}
