"use client";
import { useSession } from "next-auth/react";
export default function () {
  const session = useSession();
  const data = session?.data?.user?.email ?? "No number!";
  return <span>{data}</span>;
}
