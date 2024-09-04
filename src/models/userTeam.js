import mongoose, { models, Schema } from "mongoose";

const userTeamSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    cargo: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "",
    },
    redes: {
      type: Object,
      default: {
        facebook: "",
        instagram: "",
        tiktok: "",
        youtube: "",
        linkedin: "",
        web: "",
      },
    },
  },
  { timestamps: true }
);

const UserTeam = models.UserTeam || mongoose.model("UserTeam", userTeamSchema);
export default UserTeam;
