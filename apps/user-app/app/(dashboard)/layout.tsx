"use client";
import { usePathname, useRouter } from "next/navigation";
import { SidebarItem } from "../../components/SidebarItem";
import { ArrowLeft } from "lucide-react";
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
        <button
          onClick={() => {
            router.back();
          }}
          className="absolute top-4 left-4 bg-blue-600 text-white p-2 rounded-full z-50 flex items-center shadow-md hover:shadow-xl transition-shadow duration-200"
        >
          <ArrowLeft className="h-5 w-5"></ArrowLeft>
        </button>
      )}
      <div className={exceptDashboard ? "pl-12 pt-6" : ""}>{children}</div>
    </div>
  );
}
