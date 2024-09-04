import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import FormRegister from "@/components/register/FormRegister";

export default async function page() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return <FormRegister />;
}
