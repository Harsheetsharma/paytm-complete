import { Wallet } from "lucide-react";
import { AppbarClient } from "../AppbarClient";
import { Button } from "./Button";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
export const Header = ({ showHeader }: any) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={
        `border-b bg-white/95 backdrop-blur-md sticky top-0 z-50  transform transition-all duration-[600ms] ease-out` +
        (showHeader ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6")
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <Wallet className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Paytm</h1>
              <p className="text-xs text-slate-500 -mt-1">Payments Bank</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Personal
            </a>
            <a
              href="#"
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Business
            </a>
            <a
              href="#"
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Developer
            </a>
            <a
              href="#"
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Company
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <AppbarClient></AppbarClient>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="h-4 w-4 mr-2" />
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Personal
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Business
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Developer
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Company
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <AppbarClient></AppbarClient>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Download className="h-4 w-4 mr-2" />
                  Download App
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
