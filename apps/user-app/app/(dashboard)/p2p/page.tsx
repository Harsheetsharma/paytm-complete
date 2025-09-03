export const dynamic = "force-dynamic"; // disable static optimization
export const fetchCache = "force-no-store"; // disable fetch caching
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import P2pTransfer from "../../../components/p2p-transfer";
import DisplayP2pTransferComponent from "../../../components/DisplayP2pTransferComponent";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await getServerSession(authOptions);
  if (session?.user.id) {
    redirect("/");
  }

  return <DisplayP2pTransferComponent></DisplayP2pTransferComponent>;
}
