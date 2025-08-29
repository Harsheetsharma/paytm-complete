import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { globalLoading } from "../../../packages/store/src";

export function ButtontoTransactionsPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const setGlobalLoading = useSetRecoilState(globalLoading);

  async function handlebutton() {
    setLoading(true);
    setGlobalLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 100));
    router.push("/transactions");
    setTimeout(() => setGlobalLoading(false), 600);
  }
  return (
    <button onClick={handlebutton}>
      {loading ? "Loading..." : "View all transactions"}
    </button>
  );
}
