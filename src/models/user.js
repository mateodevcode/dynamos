import mongoose, { models, Schema } from "mongoose";

const userSchema = new Schema(
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
      default: "",
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
    failedAttempts: {
      type: Number,
      default: 0,
    },
    lockedUntil: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
