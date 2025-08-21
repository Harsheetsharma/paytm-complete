"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  loader?: boolean;
}

export const Button = ({ onClick, children, loader }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={loader}
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-500 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed
"
    >
      {children}
    </button>
  );
};

{
  /* <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button> */
}
