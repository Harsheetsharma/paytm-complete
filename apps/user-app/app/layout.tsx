import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../provider";
import { AppbarClient } from "../components/AppbarClient";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalLoadingOverLay } from "../components/GlobalLoadingOverLay";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wallet",
  description: "Simple wallet app",
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-w-screen min-h-screen bg-[#ebe6e6]">
            {/* <AppbarClient /> */}
            {children}
            <ToastContainer
              position="top-right"
              autoClose={3000}
              theme="light"
              hideProgressBar={false}
            />
          </div>
          <GlobalLoadingOverLay />
        </Providers>
      </body>
    </html>
  );
}
