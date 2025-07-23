import { Card } from "@repo/ui/card";

export const Recentp2pTxn = ({
  transactions,
}: {
  transactions: {
    timeStamp: Date;
    amount: number;
    direction: "sent" | "received";
    counterParty: any;
    // TODO: Can the type of `status` be more specific?
  }[];
}) => {
  if (!transactions.length) {
    return (
      <Card title="Your Recent Transactions">
        <div className="text-center pb-8 pt-8">No Recent transactions</div>
      </Card>
    );
  }
  return (
    <Card title="Your Recent Transactions">
      <div className="pt-2">
        {transactions.map((t) => (
          <div className="flex justify-between border-b mb-1">
            <div>
              <div className="text-sm">
                {t.direction === "sent"
                  ? `INR ${t.amount / 100} Sent to ${t.counterParty}`
                  : `INR ${t.amount / 100} Received from ${t.counterParty}`}
              </div>
              <div className="text-slate-600 text-xs">
                {t.timeStamp.toDateString()}
              </div>
            </div>
            <div
              className={`flex flex-col justify-center font-semibold ${
                t.direction === "sent" ? "text-red-600" : "text-green-600"
              }`}
            >
              {t.direction === "sent" ? "-" : "+"} Rs {t.amount / 100}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
