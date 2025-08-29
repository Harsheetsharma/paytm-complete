// import { getServerSession } from "next-auth";
// import { redirect } from 'next/navigation'
// import { authOptions } from "./lib/auth";

// export default async function Page() {
//   const session = await getServerSession(authOptions);
//   if (session?.user) {
//     redirect('/dashboard')
//   } else {
//     redirect('/api/auth/signin')
//   }
// }

"use client";

import { useState } from "react";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import { AppbarClient } from "../components/AppbarClient";
import {
  Menu,
  X,
  Smartphone,
  CreditCard,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Download,
  QrCode,
  Banknote,
  Wallet,
  Receipt,
  Globe,
  Lock,
  Star,
  PlayCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";

//custom Botton compoent

// Button Component
const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}: {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
  [key: string]: any;
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
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
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => (
  <div
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
    {...props}
  >
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
    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

// Badge Component
const Badge = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => (
  <div
    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default function PaytmHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
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

  const stats = [
    { number: "450M+", label: "Registered Users" },
    { number: "21M+", label: "Merchants" },
    { number: "1.4B+", label: "Monthly Transactions" },
    { number: "₹6L Cr+", label: "Annual Transaction Value" },
  ];

  const services = [
    { name: "Money Transfer", icon: <ArrowRight className="h-5 w-5" /> },
    { name: "Investment", icon: <TrendingUp className="h-5 w-5" /> },
    { name: "Insurance", icon: <Shield className="h-5 w-5" /> },
    { name: "Loans", icon: <Banknote className="h-5 w-5" /> },
    { name: "Gold", icon: <Award className="h-5 w-5" /> },
    { name: "Travel", icon: <Globe className="h-5 w-5" /> },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Small Business Owner",
      content:
        "Paytm has revolutionized how I handle payments. Quick, secure, and reliable!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Freelancer",
      content:
        "The UPI payments are so smooth. I can receive payments instantly from clients.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Restaurant Owner",
      content:
        "QR code payments have made transactions seamless for my customers.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Wallet className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Paytm</h1>
                <p className="text-xs text-slate-500 -mt-1">Payments Bank</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Personal
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Business
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Developer
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Company
              </a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <AppbarClient></AppbarClient>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="h-4 w-4 mr-2" />
                Download App
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Personal
                </a>
                <a
                  href="#"
                  className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Business
                </a>
                <a
                  href="#"
                  className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Developer
                </a>
                <a
                  href="#"
                  className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Company
                </a>
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <AppbarClient></AppbarClient>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download App
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                  India's Most-loved Payments App
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Recharge & Pay Bills on{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                    Paytm
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Pay electricity bills, mobile & DTH recharge, book travel &
                  entertainment, and make UPI payments securely with India's
                  favorite payments app.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Paytm App
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-3 text-lg border-slate-300 hover:border-blue-600 hover:text-blue-600"
                >
                  <PlayCircle className="h-5 w-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">
                    450M+ users trust us
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">4.8</span>
                  <span className="text-sm text-slate-600">rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        Quick Pay
                      </h3>
                      <p className="text-slate-600">
                        Enter mobile number or scan QR
                      </p>
                    </div>

                    <div className="space-y-4">
                      <Input
                        placeholder="Enter mobile number"
                        className="h-12 text-lg border-slate-300 focus:border-blue-600"
                      />
                      <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-lg">
                        <Zap className="h-5 w-5 mr-2" />
                        Pay Now
                      </Button>
                    </div>

                    <div className="flex items-center justify-center space-x-4 text-sm text-slate-500">
                      <div className="flex items-center space-x-1">
                        <Shield className="h-4 w-4" />
                        <span>Secure</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Zap className="h-4 w-4" />
                        <span>Instant</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="h-4 w-4" />
                        <span>Trusted</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background decorations */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-blue-100 rounded-full opacity-50" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-green-100 rounded-full opacity-50" />
              <div className="absolute top-1/2 -left-4 w-8 h-8 bg-purple-100 rounded-full opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything you need for digital payments
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From bill payments to money transfers, experience the convenience
              of digital payments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              More than just payments
            </h2>
            <p className="text-xl text-slate-600">
              Explore our complete suite of financial services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-blue-600">{service.icon}</div>
                  </div>
                  <h3 className="font-semibold text-slate-900">
                    {service.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What our users say
            </h2>
            <p className="text-xl text-slate-600">
              Join millions of satisfied customers across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  Bank-grade Security
                </Badge>
                <h2 className="text-4xl font-bold text-slate-900">
                  Your money is safe with us
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  We use industry-leading security measures and are regulated by
                  RBI. Your transactions are protected with 256-bit SSL
                  encryption.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: <Shield className="h-5 w-5" />,
                    title: "RBI Regulated",
                    desc: "Licensed & regulated by Reserve Bank of India",
                  },
                  {
                    icon: <Lock className="h-5 w-5" />,
                    title: "SSL Encrypted",
                    desc: "256-bit SSL encryption for all transactions",
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5" />,
                    title: "PCI DSS Compliant",
                    desc: "Highest standards of payment security",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-green-600">{item.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: <Users className="h-8 w-8" />,
                      label: "450M+ Users",
                      color: "text-blue-600",
                    },
                    {
                      icon: <Award className="h-8 w-8" />,
                      label: "ISO Certified",
                      color: "text-green-600",
                    },
                    {
                      icon: <Shield className="h-8 w-8" />,
                      label: "RBI Licensed",
                      color: "text-purple-600",
                    },
                    {
                      icon: <TrendingUp className="h-8 w-8" />,
                      label: "₹6L Cr+ GMV",
                      color: "text-orange-600",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 text-center shadow-lg"
                    >
                      <div className={`${item.color} mb-3 flex justify-center`}>
                        {item.icon}
                      </div>
                      <div className="font-semibold text-slate-900 text-sm">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Download Paytm App Now
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Join millions of Indians who trust Paytm for their daily
                payments. Fast, secure, and convenient.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="border text-white hover:bg-white bg-blue-700 hover:text-blue-600 px-8 py-4 text-lg"
              >
                <Download className="h-5 w-5 mr-2" />
                Download for Android
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
              >
                <Download className="h-5 w-5 mr-2" />
                Download for iOS
              </Button>
            </div>

            <div className="flex justify-center items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.8★</div>
                <div className="text-blue-100 text-sm">Play Store</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.7★</div>
                <div className="text-blue-100 text-sm">App Store</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Wallet className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Paytm</h3>
                  <p className="text-xs text-slate-400">Payments Bank</p>
                </div>
              </div>
              <p className="text-slate-400 mb-6 max-w-sm">
                India's largest mobile payments and commerce platform. Making
                digital payments simple, safe and secure.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors">
                  <Globe className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors">
                  <Users className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
              </div>
            </div>

            {[
              {
                title: "Company",
                links: ["About Us", "Careers", "Blog", "Press", "Contact Us"],
              },
              {
                title: "Products",
                links: ["Wallet", "UPI", "Postpaid", "Broadband", "Loan"],
              },
              {
                title: "Help",
                links: [
                  "Support",
                  "24/7 Help",
                  "Fees & Limits",
                  "Security",
                  "Privacy",
                ],
              },
              {
                title: "Quick Links",
                links: [
                  "Download App",
                  "Business",
                  "Developer",
                  "Investor Relations",
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 text-sm">
                © 2024 Paytm. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Grievances
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-800">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span className="text-slate-400 text-sm">1800-1800-1234</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span className="text-slate-400 text-sm">
                    support@paytm.com
                  </span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span className="text-slate-400 text-sm">
                    New Delhi, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
