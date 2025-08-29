"use client";
import React from "react";
import { globalLoading } from "../../../packages/store/src";
import { useRecoilValue } from "recoil";

export const GlobalLoadingOverLay = () => {
  console.log("React versions:", React.version);
  const isLoading = useRecoilValue(globalLoading);
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
      <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};
