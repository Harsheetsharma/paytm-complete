"use client";
import { usePathname, useRouter } from "next/navigation";
import { SidebarItem } from "../../components/SidebarItem";
import { ArrowLeft } from "lucide-react";
import { Home } from "lucide-react";
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const pathname = usePathname();
  const router = useRouter();

  const exceptDashboard = pathname !== "/dashboard";

  return (
    <div className="relative min-h-screen w-full bg-slate-50">
      {exceptDashboard && (
        <div className="absolute top-4 left-4 z-50 flex items-center gap-2">
          <button
            onClick={() => {
              router.push("/dashboard");
            }}
            className="bg-blue-600 text-white px-3 py-2 rounded-full flex items-center gap-2 shadow-md hover:shadow-xl hover:bg-blue-700 transition-all duration-200 text-sm font-medium"
          >
            <Home className="h-4 w-4" />
            Home
          </button>
          <button
            onClick={() => {
              router.back();
            }}
            className="bg-blue-600 text-white p-2 rounded-full flex items-center shadow-md hover:shadow-xl hover:bg-blue-700 transition-all duration-200"
          >
            <ArrowLeft className="h-5 w-5"></ArrowLeft>
          </button>
        </div>
      )}
      <div
        className={exceptDashboard ? "pt-12 pl-4 pr-4 sm:pl-20 sm:pr-0" : ""}
      >
        {children}
      </div>
    </div>
  );
}
