import { Badge } from "./Badge";
import { Button } from "./Button";
import { Input } from "./Input";
import {
  CheckCircle,
  Download,
  PlayCircle,
  Shield,
  Star,
  Zap,
} from "lucide-react";
export const HeroSection = ({ showHero }: any) => {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50  transform transition-all duration-[600ms] ease-out ${showHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
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
  );
};
