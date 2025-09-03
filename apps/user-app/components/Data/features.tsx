import { Wallet, QrCode, Receipt, Smartphone } from "lucide-react";

export const features = [
  {
    icon: <Wallet className="h-8 w-8 text-blue-600" />,
    title: "Digital Wallet",
    description: "Store money securely and pay instantly anywhere",
    color: "bg-blue-50",
  },
  {
    icon: <QrCode className="h-8 w-8 text-green-600" />,
    title: "QR Payments",
    description: "Scan & pay at millions of merchants across India",
    color: "bg-green-50",
  },
  {
    icon: <Receipt className="h-8 w-8 text-purple-600" />,
    title: "Bill Payments",
    description: "Pay electricity, gas, water & other utility bills",
    color: "bg-purple-50",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-orange-600" />,
    title: "Mobile Recharge",
    description: "Instant mobile & DTH recharge with cashback",
    color: "bg-orange-50",
  },
];
