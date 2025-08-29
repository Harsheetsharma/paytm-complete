import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { globalLoading } from "../../../packages/store/src";

export function ButtonToTransferPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const setGlobalLoading = useSetRecoilState(globalLoading);
  async function handleButton() {
    setLoading(true);
    setGlobalLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 100));
    await router.push("/transfer");
    setTimeout(() => setGlobalLoading(false), 600);
  }
  return (
    <button onClick={handleButton}>
      {loading ? "Loading..." : "+ Add Money"}
    </button>
  );
}
