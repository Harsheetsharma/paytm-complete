"use client";
import { useInView } from "react-intersection-observer";
import { Badge } from "./Badge";
import {
  Award,
  CheckCircle,
  Lock,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
export const TrustSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <section
      ref={ref}
      className={`py-20 bg-slate-50 transform transition-all duration-[800ms] ease-out
              ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-green-500 text-green-800">
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
  );
};
