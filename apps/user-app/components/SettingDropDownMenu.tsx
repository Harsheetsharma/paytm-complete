"use client";

import { useState, useRef, useEffect } from "react";
import { Settings } from "lucide-react";

interface DropdownProps {
  options: { label: string; onClick: () => void }[];
}

export default function SettingsDropdown({ options }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Settings button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-2 rounded-md hover:bg-gray-100"
      >
        <Settings className="h-5 w-5" />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white border border-gray-200">
          <ul className="py-1">
            {options.map((item, idx) => (
              <li
                key={idx}
                onClick={() => {
                  item.onClick();
                  setOpen(false); // close after click
                }}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
