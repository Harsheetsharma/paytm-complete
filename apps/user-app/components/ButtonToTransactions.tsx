import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { globalLoading } from "@repo/store";

export function ButtontoTransactionsPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const setGlobalLoading = useSetRecoilState(globalLoading);

  function handlebutton() {
    setLoading(true);
    setGlobalLoading(true);
    router.push("/transactions");
    setTimeout(() => setGlobalLoading(false), 600);
  }
  return (
    <button onClick={handlebutton}>
      {loading ? "Loading..." : "View all transactions"}
    </button>
  );
}
