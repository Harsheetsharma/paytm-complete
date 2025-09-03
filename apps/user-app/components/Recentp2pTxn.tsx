// "use client";
// // import { Card } from "@repo/ui/card";
// import { Button } from "./minicomponents/Button";
// import { Card } from "./minicomponents/Card";
// import { CardHeader } from "./minicomponents/CardHeader";
// import { CardContent } from "./minicomponents/CardContent";
// import {
//   History,
//   Filter,
//   Download,
//   ArrowUpRight,
//   ArrowDownLeft,
//   Zap,
//   Smartphone,
//   Clock,
//   ArrowRight,
// } from "lucide-react";
// import { ButtontoTransactionsPage } from "./ButtonToTransactions";

// export const Recentp2pTxn = ({
//   transactions,
// }: {
//   transactions: {
//     timeStamp: Date;
//     amount: number;
//     direction: "sent" | "received";
//     counterParty: any;
//     // TODO: Can the type of `status` be more specific?
//   }[];
// }) => {
//   if (!transactions.length) {
//     return (
//       <Card title="Your Recent Transactions">
//         <div className="text-center pb-8 pt-8">No Recent transactions</div>
//       </Card>
//     );
//   }

//   const Badge = ({
//     children,
//     variant = "default",
//     className = "",
//     ...props
//   }: {
//     children: React.ReactNode;
//     variant?: "default" | "success" | "warning" | "error";
//     className?: string;
//     [key: string]: any;
//   }) => {
//     const variants = {
//       default: "bg-slate-100 text-slate-800",
//       success: "bg-green-100 text-green-800",
//       warning: "bg-yellow-100 text-yellow-800",
//       error: "bg-red-100 text-red-800",
//     };

//     return (
//       <span
//         className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}
//         {...props}
//       >
//         {children}
//       </span>
//     );
//   };

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case "completed":
//         return <Badge variant="success">Completed</Badge>;
//       case "pending":
//         return <Badge variant="warning">Pending</Badge>;
//       case "failed":
//         return <Badge variant="error">Failed</Badge>;
//       default:
//         return <Badge>Unknown</Badge>;
//     }
//   };

//   return (
//     <Card className="w-full">
//       <CardHeader>
//         <div className="flex justify-between items-center flex-col sm:flex-row sm:items-center gap-4 mb-6">
//           <h3 className="text-lg font-semibold text-slate-900">
//             Recent Transactions
//           </h3>
//           <div className="flex items-center space-x-2">
//             <Button variant="ghost" size="sm">
//               <Filter className="h-4 w-4 mr-2" />
//               Filter
//             </Button>
//             <Button variant="ghost" size="sm">
//               <Download className="h-4 w-4 mr-2" />
//               Export
//             </Button>
//           </div>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-4">
//           {transactions.map((transaction, index) => (
//             <div
//               key={index}
//               className="flex flex-row sm:items-center sm:justify-between gap-4 p-4 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer border-b"
//             >
//               <div className="flex items-center space-x-4">
//                 <div className="w-10 h-10 bg-slate-400 rounded-full flex items-center justify-center">
//                   {/* {getTransactionIcon(transaction.type)} */}
//                 </div>
//                 <div>
//                   <p className="font-medium text-slate-900">
//                     {transaction.counterParty}
//                   </p>
//                   <p className="text-sm text-slate-500">
//                     {transaction.direction === "sent"
//                       ? `Sent to ${transaction.counterParty}`
//                       : `Received from ${transaction.counterParty}`}
//                   </p>
//                 </div>
//               </div>
//               <div className="text-right sm:text-right ">
//                 <p
//                   className={`font-semibold ${transaction.direction === "sent" ? "text-red-500" : "text-green-800"} mb-2`}
//                 >
//                   {transaction.direction === "sent" ? "-" : "+"}
//                   {transaction.amount / 100}
//                 </p>
//                 <div className="flex items-end sm:items-end space-x-2">
//                   <p className="text-xs text-slate-500">
//                     {transaction.timeStamp.toDateString()}
//                   </p>
//                   {getStatusBadge("completed")}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

"use client";
import { Button } from "./minicomponents/Button";
import { Card } from "./minicomponents/Card";
import { CardHeader } from "./minicomponents/CardHeader";
import { CardContent } from "./minicomponents/CardContent";
import {
  Filter,
  Download,
  ArrowUpRight,
  ArrowDownLeft,
  User,
  Clock,
  ChevronRight,
} from "lucide-react";

export const Recentp2pTxn = ({
  transactions,
}: {
  transactions: {
    timeStamp: Date;
    amount: number;
    direction: "sent" | "received";
    counterParty: any;
  }[];
}) => {
  if (!transactions.length) {
    return (
      <Card title="Your Recent Transactions">
        <div className="text-center pb-8 pt-8">No Recent transactions</div>
      </Card>
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
      success: "bg-green-50 text-green-700 border border-green-200",
      warning: "bg-yellow-50 text-yellow-700 border border-yellow-200",
      error: "bg-red-50 text-red-700 border border-red-200",
    };

    return (
      <span
        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}
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

  const formatDate = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return `Today, ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    } else if (date.toDateString() === yesterday.toDateString()) {
      return `Yesterday, ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    } else {
      return date.toLocaleDateString([], {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  };

  const getTransactionIcon = (direction: "sent" | "received") => {
    if (direction === "sent") {
      return (
        <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center border border-red-100">
          <ArrowUpRight className="h-5 w-5 text-red-600" />
        </div>
      );
    } else {
      return (
        <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center border border-green-100">
          <ArrowDownLeft className="h-5 w-5 text-green-600" />
        </div>
      );
    }
  };

  const getUserAvatar = (name: string) => {
    const initial = name.charAt(0).toUpperCase();
    const colors = [
      "bg-blue-500",
      "bg-purple-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-pink-500",
      "bg-indigo-500",
    ];
    const colorIndex = name.charCodeAt(0) % colors.length;

    return (
      <div
        className={`w-10 h-10 ${colors[colorIndex]} rounded-full flex items-center justify-center text-white font-medium text-sm`}
      >
        {initial}
      </div>
    );
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader>
        {/* Desktop Header */}
        <div className="hidden sm:flex justify-between items-center mb-6">
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

        {/* Mobile Header */}
        <div className="sm:hidden flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-slate-900">
            Recent Transactions
          </h3>
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="p-2">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-0 sm:px-6">
        <div className="space-y-0 sm:space-y-4">
          {transactions.map((transaction, index) => (
            <div key={index}>
              {/* Mobile Layout */}
              <div className="sm:hidden">
                <div className="flex items-center justify-between px-4 py-4 hover:bg-slate-50 active:bg-slate-100 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    {getUserAvatar(transaction.counterParty)}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium text-slate-900 truncate pr-2">
                          {transaction.counterParty}
                        </p>
                        <p
                          className={`font-semibold text-lg ${
                            transaction.direction === "sent"
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {transaction.direction === "sent" ? "-" : "+"}₹
                          {transaction.amount / 100}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-500 truncate">
                          {transaction.direction === "sent"
                            ? "Sent"
                            : "Received"}
                        </p>
                        <div className="flex items-center space-x-2 flex-shrink-0">
                          <p className="text-xs text-slate-400">
                            {formatDate(transaction.timeStamp)}
                          </p>
                          {getStatusBadge("completed")}
                        </div>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400 ml-2 flex-shrink-0" />
                </div>
                {index < transactions.length - 1 && (
                  <div className="ml-16 border-b border-slate-100" />
                )}
              </div>

              {/* Desktop Layout */}
              <div className="hidden sm:flex items-center justify-between p-4 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer border-b border-slate-100 last:border-b-0">
                <div className="flex items-center space-x-4">
                  {getTransactionIcon(transaction.direction)}
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
                <div className="text-right">
                  <p
                    className={`font-semibold text-lg mb-1 ${
                      transaction.direction === "sent"
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {transaction.direction === "sent" ? "-" : "+"}₹
                    {transaction.amount / 100}
                  </p>
                  <div className="flex items-center space-x-2">
                    <p className="text-xs text-slate-500">
                      {formatDate(transaction.timeStamp)}
                    </p>
                    {getStatusBadge("completed")}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
