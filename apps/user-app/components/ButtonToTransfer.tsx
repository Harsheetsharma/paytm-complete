import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { globalLoading } from "@repo/store";

export function ButtonToTransferPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const setGlobalLoading = useSetRecoilState(globalLoading);
  function handleButton() {
    setLoading(true);
    setGlobalLoading(true);
    router.push("/transfer");
    setTimeout(() => setGlobalLoading(false), 600);
  }
  return (
    <button onClick={handleButton}>
      {loading ? "Loading..." : "+ Add Money"}
    </button>
  );
}
