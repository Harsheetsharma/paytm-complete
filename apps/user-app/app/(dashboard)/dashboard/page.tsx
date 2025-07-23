"use client";
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();
  return (
    <div className="flex justify-between w-full">
      <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
        Welcome to paytm!
      </div>
      <div>
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-6 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={() => {
            router.push("/");
          }}
        >
          Go to homepage
        </button>
      </div>
    </div>
  );
}
// Send Money
// Go to Transaction
// Go to Transfer -
