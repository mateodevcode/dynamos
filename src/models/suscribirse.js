import mongoose, { models } from "mongoose";

const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

const Email = models.Email || mongoose.model("Email", emailSchema);
export default Email;