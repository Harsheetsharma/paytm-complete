"use client";

import { globalLoading } from "@repo/store";
import { useRecoilValue } from "recoil";

export const GlobalLoadingOverLay = () => {
  const isLoading = useRecoilValue(globalLoading);
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="w-10 h-10 border-t-transparent border-b-transparent border-r-transparent border-l-transparent border-2 border-white rounded-full animate-spin"></div>
    </div>
  );
};
