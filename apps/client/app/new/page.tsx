import CreateAuction from "@/components/pages/CreateAuction";
import { redirect } from "next/navigation";
import { getAuth } from "@/lib/auth";

export default async function Page() {
  const { session } = await getAuth();
  if (!session) {
    redirect("/sign-in");
  }
  return <CreateAuction />;
}
