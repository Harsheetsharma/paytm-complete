"use client";
import { Card } from "./Card";
import { CardContent } from "./CardContent";
import { testimonials } from "../Data/testimonials";
import { Star } from "lucide-react";
import { useInView } from "react-intersection-observer";

export const TestimonialsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <section
      ref={ref}
      className={`py-20 bg-white transform transition-all duration-[800ms] ease-out
     ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-9"}`}
    >
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
  );
};
