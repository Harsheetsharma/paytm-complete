"use client";
import { useState } from "react";
import { BadgeInfo } from "lucide-react";
import Modal from "./Modal"; // import modal component
import { usePathname } from "next/navigation";
import path from "path";

export default function InfoButton() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const onlyDashboardPage = pathname == "/dashboard";
  const onlyp2pPage = pathname == "/p2p";
  const onlyTransactionPage = pathname == "/transactions";
  const onlyTransferPage = pathname == "/transfer";
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="hidden xl:block px-5 py-3 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        Help!
      </button>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="text-gray-600 text-xl hover:text-gray-800 block xl:hidden"
      >
        <BadgeInfo></BadgeInfo>
      </button>
      {/* Modal */}
      {onlyDashboardPage && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          sentence1="1. This is a Paytm clone project."
          sentence2="2. You can add money in it, but don’t use your real money."
          sentence3="3. You can see transactions by clicking the Recent Transactions
            button."
          sentence4="4. You can add money by clicking the Add Money button."
          sentence5="5. You can send money to someone by clicking the Send Money
            button."
        />
      )}
      {onlyp2pPage && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          sentence1="1. You can send money someone."
          sentence2="2. enter the number and press send button!"
        />
      )}
      {onlyTransactionPage && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          sentence1="1. Here you will see all the previous transactions."
        />
      )}
      {onlyTransferPage && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          sentence1="1. You can add money via bank or Stripe."
          sentence2="2. On side you can check your Paytm balance."
        />
      )}
    </>
  );
}
