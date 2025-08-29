import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { globalLoading } from "../../../packages/store/src";

export function ButtontoTransactionsPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const setGlobalLoading = useSetRecoilState(globalLoading);

  async function handlebutton() {
    try {
      setLoading(true);
      setGlobalLoading(true);
      router.push("/transactions");
    } finally {
      setLoading(false);
      setTimeout(() => setGlobalLoading(false), 600);
    }
  }
  return (
    <button onClick={handlebutton}>
      {loading ? "Loading..." : "View all transactions"}
    </button>
  );
}
