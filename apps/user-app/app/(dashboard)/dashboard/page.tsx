"use client";

import { useEffect, useState } from "react";
import { ButtontoTransactionsPage } from "../../../components/ButtonToTransactions";
import { ButtonToTransferPage } from "../../../components/ButtonToTransfer";
import {
  Bell,
  Search,
  User,
  Settings,
  LogOut,
  Wallet,
  CreditCard,
  ArrowUpRight,
  ArrowDownLeft,
  Plus,
  Send,
  Smartphone,
  Zap,
  Receipt,
  TrendingUp,
  TrendingDown,
  Eye,
  EyeOff,
  QrCode,
  Scan,
  History,
  Gift,
  Shield,
  Star,
  ChevronRight,
  MoreHorizontal,
  Calendar,
  Filter,
  Download,
  RefreshCw,
  Home,
  PieChart,
  Activity,
  Users,
  Banknote,
  Globe,
  Award,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  LoaderCircle,
  Loader,
} from "lucide-react";
import { useRouter } from "next/navigation";
import UsersName from "../../../components/UsersName";
import { on } from "events";

// Button Component
const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}: {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  [key: string]: any;
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl",
    outline:
      "border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:border-blue-500",
    ghost: "hover:bg-slate-100 text-slate-700 hover:text-slate-900",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3 text-sm",
    lg: "h-12 px-6 text-lg",
    icon: "h-10 w-10",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Card Component
const Card = ({
  children,
  onClick,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => (
  <div
    onClick={onClick}
    className={`bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => (
  <div className={`p-6 pb-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

// Input Component
const Input = ({
  className = "",
  ...props
}: {
  className?: string;
  [key: string]: any;
}) => (
  <input
    className={`flex h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

// Badge Component
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

export default function PaytmDashboard() {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState("7d");
  const router = useRouter();

  const quickActions = [
    {
      icon: <Send className="h-5 w-5" />,
      label: "Send Money",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      onclick: () => {
        router.push("/p2p");
      },
    },
    {
      icon: <QrCode className="h-5 w-5" />,
      label: "Scan & Pay",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      label: "Recharge",
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
    },
    {
      icon: <Receipt className="h-5 w-5" />,
      label: "Pay Bills",
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
    {
      icon: <Plus className="h-5 w-5" />,
      label: "Add Money",
      color: "bg-indigo-500",
      hoverColor: "hover:bg-indigo-600",
      onclick: () => {
        router.push("/transfer");
      },
    },
    {
      icon: <Gift className="h-5 w-5" />,
      label: "Rewards",
      color: "bg-pink-500",
      hoverColor: "hover:bg-pink-600",
    },
  ];

  const recentTransactions = [
    {
      id: 1,
      type: "sent",
      title: "Sent to Rahul Kumar",
      subtitle: "UPI Payment",
      amount: "₹2,500",
      time: "2 hours ago",
      status: "completed",
      icon: <ArrowUpRight className="h-4 w-4" />,
    },
    {
      id: 2,
      type: "received",
      title: "Received from Priya Sharma",
      subtitle: "UPI Payment",
      amount: "₹1,200",
      time: "5 hours ago",
      status: "completed",
      icon: <ArrowDownLeft className="h-4 w-4" />,
    },
    {
      id: 3,
      type: "bill",
      title: "Electricity Bill",
      subtitle: "BSES Rajdhani",
      amount: "₹3,450",
      time: "1 day ago",
      status: "completed",
      icon: <Zap className="h-4 w-4" />,
    },
    {
      id: 4,
      type: "recharge",
      title: "Mobile Recharge",
      subtitle: "Airtel Prepaid",
      amount: "₹399",
      time: "2 days ago",
      status: "completed",
      icon: <Smartphone className="h-4 w-4" />,
    },
    {
      id: 5,
      type: "pending",
      title: "Sent to Amit Patel",
      subtitle: "Bank Transfer",
      amount: "₹5,000",
      time: "3 days ago",
      status: "pending",
      icon: <Clock className="h-4 w-4" />,
    },
  ];

  const services = [
    {
      name: "Investment",
      icon: <TrendingUp className="h-5 w-5" />,
      description: "Mutual Funds & Stocks",
      color: "text-green-600",
    },
    {
      name: "Insurance",
      icon: <Shield className="h-5 w-5" />,
      description: "Life & Health Plans",
      color: "text-blue-600",
    },
    {
      name: "Loans",
      icon: <Banknote className="h-5 w-5" />,
      description: "Personal & Business",
      color: "text-purple-600",
    },
    {
      name: "Gold",
      icon: <Award className="h-5 w-5" />,
      description: "Digital Gold",
      color: "text-yellow-600",
    },
    {
      name: "Travel",
      icon: <Globe className="h-5 w-5" />,
      description: "Flights & Hotels",
      color: "text-indigo-600",
    },
    {
      name: "Shopping",
      icon: <Gift className="h-5 w-5" />,
      description: "Cashback Offers",
      color: "text-pink-600",
    },
  ];

  const stats = [
    {
      label: "Total Spent",
      value: "₹45,230",
      change: "+12%",
      trend: "up",
      color: "text-red-600",
    },
    {
      label: "Money Saved",
      value: "₹8,450",
      change: "+8%",
      trend: "up",
      color: "text-green-600",
    },
    {
      label: "Cashback Earned",
      value: "₹1,250",
      change: "+25%",
      trend: "up",
      color: "text-blue-600",
    },
    {
      label: "Transactions",
      value: "156",
      change: "+18%",
      trend: "up",
      color: "text-purple-600",
    },
  ];

  const getTransactionIcon = (type: string) => {
    const iconClasses = "h-4 w-4";
    switch (type) {
      case "sent":
        return <ArrowUpRight className={`${iconClasses} text-red-500`} />;
      case "received":
        return <ArrowDownLeft className={`${iconClasses} text-green-500`} />;
      case "bill":
        return <Zap className={`${iconClasses} text-yellow-500`} />;
      case "recharge":
        return <Smartphone className={`${iconClasses} text-blue-500`} />;
      case "pending":
        return <Clock className={`${iconClasses} text-orange-500`} />;
      default:
        return <ArrowRight className={iconClasses} />;
    }
  };

  // another functions to go to transfer page

  //
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
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 ">
            {/* Logo */}
            <div
              className="flex items-center space-x-3 hover:cursor-pointer"
              onClick={() => {
                router.push("/");
              }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Wallet className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Paytm</h1>
                <p className="text-xs text-slate-500 -mt-1">Dashboard</p>
              </div>
            </div>

            {/* Search */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search transactions, contacts..."
                  className="pl-10 bg-slate-50 border-slate-200"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </Button>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-slate-900">
                    {/* <UsersName></UsersName> */}
                  </p>
                  <p className="text-xs text-slate-500">Premium Member</p>
                </div>
              </div>

              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Good morning, Rajesh! 👋
          </h2>
          <p className="text-slate-600">
            Here's what's happening with your account today.
          </p>
        </div>

        {/* Balance Card */}
        <Card className="mb-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white border-0">
          <CardContent className="p-8 pt-4">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-blue-100 mb-2">Total Balance</p>
                <div className="flex items-center space-x-3">
                  <h3 className="text-4xl font-bold">
                    {balanceVisible ? "₹24,580.50" : "₹••••••••"}
                  </h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setBalanceVisible(!balanceVisible)}
                    className="text-white hover:bg-blue-600"
                  >
                    {balanceVisible ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-blue-100 text-sm mb-1">Paytm Wallet</p>
                <p className="text-2xl font-semibold">₹8,450</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-blue-100 text-sm">Account Active</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-blue-100 text-sm">Premium</span>
                </div>
              </div>
              <Button
                variant="outline"
                className="border-blue-400 text-blue-100 hover:bg-blue-600 hover:border-blue-300"
              >
                <span className="flex text-center items-center">
                  <ButtonToTransferPage></ButtonToTransferPage>
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {quickActions.map((action, index) => (
              <Card
                key={index}
                onClick={action.onclick}
                className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1 pt-4"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 ${action.color} ${action.hoverColor} rounded-xl flex items-center justify-center mx-auto mb-3 text-white transition-colors`}
                  >
                    {action.icon}
                  </div>
                  <p className="text-sm font-medium text-slate-900">
                    {action.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2 pt-3">
                      <p className="text-sm text-slate-600">{stat.label}</p>
                      <div
                        className={`flex items-center space-x-1 ${stat.color}`}
                      >
                        {stat.trend === "up" ? (
                          <TrendingUp className="h-3 w-3" />
                        ) : (
                          <TrendingDown className="h-3 w-3" />
                        )}
                        <span className="text-xs font-medium">
                          {stat.change}
                        </span>
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-slate-900">
                      {stat.value}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Transactions */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
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
                  {recentTransactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                          {getTransactionIcon(transaction.type)}
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">
                            {transaction.title}
                          </p>
                          <p className="text-sm text-slate-500">
                            {transaction.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={`font-semibold ${transaction.type === "received" ? "text-green-600" : "text-slate-900"}`}
                        >
                          {transaction.type === "received" ? "+" : "-"}
                          {transaction.amount}
                        </p>
                        <div className="flex items-center space-x-2">
                          <p className="text-xs text-slate-500">
                            {transaction.time}
                          </p>
                          {getStatusBadge(transaction.status)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="w-full">
                    <History className="h-4 w-4 mr-2" />
                    <span>
                      <ButtontoTransactionsPage></ButtontoTransactionsPage>
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Services */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-slate-900">
                  Explore Services
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`${service.color}`}>{service.icon}</div>
                        <div>
                          <p className="font-medium text-slate-900">
                            {service.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Offers */}
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardContent className="p-6 pt-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Gift className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Special Offers
                    </h4>
                    <p className="text-sm text-slate-600">Limited time deals</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-sm font-medium text-slate-900">
                      Get 10% cashback
                    </p>
                    <p className="text-xs text-slate-500">
                      On mobile recharges above ₹200
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-sm font-medium text-slate-900">
                      Flat ₹50 off
                    </p>
                    <p className="text-xs text-slate-500">
                      On electricity bill payments
                    </p>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  View All Offers
                </Button>
              </CardContent>
            </Card>

            {/* Security Status */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-slate-900">
                  Security Status
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-slate-900">
                        2FA Enabled
                      </span>
                    </div>
                    <Badge variant="success">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-slate-900">
                        KYC Verified
                      </span>
                    </div>
                    <Badge variant="success">Verified</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="h-5 w-5 text-yellow-500" />
                      <span className="text-sm text-slate-900">
                        PIN Security
                      </span>
                    </div>
                    <Badge variant="warning">Update</Badge>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <Shield className="h-4 w-4 mr-2" />
                  Security Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
