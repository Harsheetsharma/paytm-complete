"use client";
import { getServerSession } from "next-auth";
import { authOptions } from "../app/lib/auth";

export default async function () {
  const session = await getServerSession(authOptions);
  let UsersNumber = "";
  if (session?.user) {
    UsersNumber = session.user.email;
  }
  return <div>{UsersNumber}</div>;
}
