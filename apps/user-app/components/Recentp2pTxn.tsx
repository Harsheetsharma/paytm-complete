"use client";
// import { Card } from "@repo/ui/card";
import { Button } from "../app/(dashboard)/dashboard/page";
import { Card as Cards } from "../app/(dashboard)/dashboard/page";
import { CardHeader } from "../app/(dashboard)/dashboard/page";
import { CardContent } from "../app/(dashboard)/dashboard/page";
import {
  History,
  Filter,
  Download,
  ArrowUpRight,
  ArrowDownLeft,
  Zap,
  Smartphone,
  Clock,
  ArrowRight,
} from "lucide-react";
import { ButtontoTransactionsPage } from "./ButtonToTransactions";

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
      <Cards title="Your Recent Transactions">
        <div className="text-center pb-8 pt-8">No Recent transactions</div>
      </Cards>
    );
  }

  const Badge = ({
    children,
    variant = "default",
    className = "",
    ...props
  }: {
    children: React.ReactNode;
    variant?: "default" | "success" | "warning" | "error";
    className?: string;
    [key: string]: any;
  }) => {
    const variants = {
      default: "bg-slate-100 text-slate-800",
      success: "bg-green-100 text-green-800",
      warning: "bg-yellow-100 text-yellow-800",
      error: "bg-red-100 text-red-800",
    };

    return (
      <span
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge variant="success">Completed</Badge>;
      case "pending":
        return <Badge variant="warning">Pending</Badge>;
      case "failed":
        return <Badge variant="error">Failed</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <Cards className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <h3 className="text-lg font-semibold text-slate-900">
            Recent Transactions
          </h3>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction, index) => (
            <div
              key={index}
              className="flex flex-row sm:items-center sm:justify-between gap-4 p-4 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer border-b"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-slate-400 rounded-full flex items-center justify-center">
                  {/* {getTransactionIcon(transaction.type)} */}
                </div>
                <div>
                  <p className="font-medium text-slate-900">
                    {transaction.counterParty}
                  </p>
                  <p className="text-sm text-slate-500">
                    {transaction.direction === "sent"
                      ? `Sent to ${transaction.counterParty}`
                      : `Received from ${transaction.counterParty}`}
                  </p>
                </div>
              </div>
              <div className="text-right sm:text-right ">
                <p
                  className={`font-semibold ${transaction.direction === "sent" ? "text-red-500" : "text-green-800"} mb-2`}
                >
                  {transaction.direction === "sent" ? "-" : "+"}
                  {transaction.amount / 100}
                </p>
                <div className="flex items-end sm:items-end space-x-2">
                  <p className="text-xs text-slate-500">
                    {transaction.timeStamp.toDateString()}
                  </p>
                  {getStatusBadge("completed")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Cards>
  );
};
