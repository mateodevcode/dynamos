import { connectMongoDB } from "@/lib/mongodb";
import UserTeam from "@/models/userTeam";

export const dataTeam = async (id) => {
  connectMongoDB();
  const UsersTeam = await UserTeam.findById(id);
  return UsersTeam;
};

