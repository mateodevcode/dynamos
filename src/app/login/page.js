import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Login from "@/components/login/Login";

export default async function page() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return <Login />;
}
