import { authOptions } from "../../lib/auth";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";

export default async function () {
  const session = await getServerSession(authOptions);
  const data = session?.user;
  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  );
}
