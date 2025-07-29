import { Card } from "@repo/ui/card";

export const OnRampTransactions = ({
  transactions,
}: {
  transactions: {
    time: Date;
    amount: number;
    // TODO: Can the type of `status` be more specific?
    status: string;
    provider: string;
  }[];
}) => {
  if (!transactions.length) {
    return (
      <Card title="Recent On-ramp Transactions">
        <div className="text-center pb-8 pt-8">No Recent transactions</div>
      </Card>
    );
  }
  return (
    <Card title="Recent On-Ramp Transactions">
      <div className="pt-2">
        {transactions.map((t, index) => (
          <div key={index} className="flex justify-between border-b mb-1">
            <div>
              <div className="text-sm">Received INR</div>
              <div
                className={`${t.status === "Processing" ? "text-red-500" : "text-green-500"}`}
              >
                {t.status === "Processing" ? "pending" : "Completed"}
              </div>
              <div className="text-slate-600 text-xs">
                {t.time.toDateString()}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              + Rs {t.amount / 100}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
