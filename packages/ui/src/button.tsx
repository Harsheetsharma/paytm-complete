"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-white bg-blue-600 border hover:bg-blue-700  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs sm:text-sm px-3 py-1.5 sm:px-5 sm:py-2.5 me-2 mb-2 transition-colors duration-200 ease-in-out
"
    >
      {children}
    </button>
  );
};
