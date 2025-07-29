import { useRouter } from "next/navigation";
import { useState } from "react";

export function ButtontoTransactionsPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handlebutton() {
    setLoading(true);
    router.push("/transactions");
  }
  return (
    <button onClick={handlebutton}>
      {loading ? "Loading..." : "View all transactions"}
    </button>
  );
}
