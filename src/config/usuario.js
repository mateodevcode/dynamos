const { connectMongoDB } = require("@/lib/mongodb");
import User from "@/models/user";

export const obtenerUsuario = async ({email}) => {

  connectMongoDB();
  const Users = await User.findOne(email);
  return Users;
};
