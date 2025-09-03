"use client";
import { useInView } from "react-intersection-observer";
import { Button } from "./Button";
import { Download } from "lucide-react";
export const CtaSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className={`py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 transform transition-all duration-[800ms] ease-out
              ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Download Paytm App Now
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join millions of Indians who trust Paytm for their daily payments.
              Fast, secure, and convenient.
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
              className="!bg-blue-700 !text-white !border-white hover:!bg-white hover:!text-blue-600 px-8 py-4 text-lg"
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
  );
};
