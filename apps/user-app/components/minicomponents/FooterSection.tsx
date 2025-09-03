"use client";

import { Globe, Mail, MapPin, Phone, Users, Wallet } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Wallet className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Paytm</h3>
                <p className="text-xs text-slate-400">Payments Bank</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              India's largest mobile payments and commerce platform. Making
              digital payments simple, safe and secure.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors">
                <Globe className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors">
                <Users className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors">
                <Mail className="h-5 w-5" />
              </div>
            </div>
          </div>

          {[
            {
              title: "Company",
              links: ["About Us", "Careers", "Blog", "Press", "Contact Us"],
            },
            {
              title: "Products",
              links: ["Wallet", "UPI", "Postpaid", "Broadband", "Loan"],
            },
            {
              title: "Help",
              links: [
                "Support",
                "24/7 Help",
                "Fees & Limits",
                "Security",
                "Privacy",
              ],
            },
            {
              title: "Quick Links",
              links: [
                "Download App",
                "Business",
                "Developer",
                "Investor Relations",
              ],
            },
          ].map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2024 Paytm. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                Grievances
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-slate-400 text-sm">1800-1800-1234</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-slate-400 text-sm">
                  support@paytm.com
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-slate-400 text-sm">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
