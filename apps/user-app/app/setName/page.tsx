"use client";
import { useRouter } from "next/navigation";
export default function () {
  return (
    <div>
      here lies a component which will ask user for his name !
      <button
        onClick={() => {
          const router = useRouter();
          router.push("/dashboard");
        }}
      >
        Dashboard
      </button>
    </div>
  );
}
