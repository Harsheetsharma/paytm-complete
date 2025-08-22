"use client";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  sentence1?: string;
  sentence2?: string;
  sentence3?: string;
  sentence4?: string;
  sentence5?: string;
}

export default function Modal({
  isOpen,
  onClose,
  sentence1,
  sentence2,
  sentence3,
  sentence4,
  sentence5,
}: ModalProps) {
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
          <h3 className="text-xl font-semibold">Important Info</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            Close
          </button>
        </div>

        {/* Body */}
        <div className="py-4 text-left text-gray-700 space-y-2">
          <p>{sentence1}</p>
          <p>{sentence2}</p>
          <p>{sentence3}</p>
          <p>{sentence4}</p>
          <p>{sentence5}</p>
        </div>
      </div>
    </div>
  );
}
