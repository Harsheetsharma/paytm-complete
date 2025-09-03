"use client";
import { useInView } from "react-intersection-observer";
import { Card } from "./Card";
import { CardContent } from "./CardContent";
import { features } from "../Data/features";

export const FeaturesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.2, // fire when 20% of the section is visible
  });

  return (
    <section
      ref={ref}
      className={`py-20 bg-white transform transition-all duration-[800ms] ease-out
              ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Everything you need for digital payments
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From bill payments to money transfers, experience the convenience of
            digital payments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
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
  );
};
