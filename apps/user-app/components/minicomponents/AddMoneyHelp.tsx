"use client";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddMoneyModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal box */}
      <div className="relative bg-white rounded-lg shadow-lg p-6 z-10 w-full max-w-lg">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-xl font-semibold">How to add money?</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            Close
          </button>
        </div>

        {/* Body */}
        <div className="py-4 text-left text-gray-700 space-y-2">
          <p>
            2. You can add money using either <b>Bank Payment</b> or{" "}
            <b>Stripe Payment</b>.
          </p>
        </div>
      </div>
    </div>
  );
}
