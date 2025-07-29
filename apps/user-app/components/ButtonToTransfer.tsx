import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ButtonToTransferPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  function handleButton() {
    setLoading(true);
    router.push("/transfer");
  }
  return (
    <button onClick={handleButton}>
      {loading ? "Loading..." : "+ Add Money"}
    </button>
  );
}
