"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "@repo/ui/appbar";
import { useRouter } from "next/navigation";
import { globalLoading } from "../../../packages/store/src";
import { useSetRecoilState } from "recoil";

export function AppbarClient() {
  const session = useSession();
  const router = useRouter();
  const setGlobalLoading = useSetRecoilState(globalLoading);

  const isAuthenticated = session.status === "authenticated";
  const goToDashboard = async () => {
    try {
      setGlobalLoading(true);
      router.push("/dashboard");
      setGlobalLoading(false);
    } finally {
      setTimeout(() => setGlobalLoading(false), 600);
    }
  };
  return (
    <div className="flex justify-center">
      <Appbar
        onSignin={signIn}
        onSignout={async () => {
          await signOut({ redirect: false });
          router.push("/pages/signin");
          // router.push("/api/auth/signin")
        }}
        user={session.data?.user}
      />
      {isAuthenticated && (
        <div>
          <button
            className="text-white bg-blue-600 border hover:bg-blue-700  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition-colors duration-200 ease-in-out mt-2"
            onClick={goToDashboard}
          >
            Dashboard
          </button>
        </div>
      )}
    </div>
  );
}
