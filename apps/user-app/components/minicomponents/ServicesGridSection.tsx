"use client";
import { Card } from "./Card";
import { CardContent } from "./CardContent";
import { services } from "../Data/services";
import { useInView } from "react-intersection-observer";

export const ServicesGridSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className={`py-20 bg-slate-50 transform transition-all duration-[800ms] ease-out
     ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
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
              className="border-0 pt-5 shadow-md hover:shadow-xl transition-all  cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">{service.icon}</div>
                </div>
                <h3 className="font-semibold text-slate-900">{service.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
