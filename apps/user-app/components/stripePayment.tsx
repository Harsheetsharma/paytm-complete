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
        className="text-white bg-blue-600 border hover:bg-blue-700  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition-colors duration-200 ease-in-out"
      >
        {loading ? "Redirecting..." : "Add via stripe"}
      </button>
    </div>
  );
}
// Send Money
// Go to Transaction
// Go to Transfer -
