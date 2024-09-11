import mongoose, { models, Schema } from "mongoose";

const userGoogleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    ocupacion: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

const UserGoogle =
  models.UserGoogle || mongoose.model("UserGoogle", userGoogleSchema);
export default UserGoogle;
