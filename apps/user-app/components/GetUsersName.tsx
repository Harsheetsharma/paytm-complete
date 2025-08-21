"use client";
import { useSession } from "next-auth/react";

export default function () {
  const { data: session } = useSession();
  return <span>{session?.user?.name ?? "Guest"}</span>;
}
