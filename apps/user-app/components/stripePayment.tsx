"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function StripePayment({ amount }: { amount: number }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handlepayment() {
    setLoading(true);

    if (amount < 50) {
      alert("Minimun ammount is ₹50!");
      router.push("/transfer");
    }

    const res = await fetch("/api/stripe", {
      method: "POST",
      body: JSON.stringify({
        name: "Add ₹100 to wallet",
        amount: amount,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Error creating stripe session");
    }
    setLoading(false);
  }

  return (
    <div>
      <button
        onClick={handlepayment}
        disabled={loading}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-500 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Redirecting..." : "Add via stripe"}
      </button>
    </div>
  );
}
// Send Money
// Go to Transaction
// Go to Transfer -
