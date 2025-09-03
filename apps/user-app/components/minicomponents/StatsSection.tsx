import { useEffect, useState } from "react";
import { stats } from "../Data/stats";
export const StatsSection = ({ showStats }: { showStats: any }) => {
  return (
    <section
      className={`py-16 bg-slate-900 transform transition-all duration-[600ms] ease-out
          ${showStats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
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
  );
};
