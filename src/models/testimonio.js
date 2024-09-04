import mongoose, { models } from "mongoose";

const testimonioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default: "",
  },
  cargo: {
    type: String,
    default: "",
  },
  testimonio: {
    type: String,
    required: true,
  },
  testimonioCompleto: {
    type: String,
    required: true,
  },
});

const Testimonio = models.Testimonio || mongoose.model("Testimonio", testimonioSchema);
export default Testimonio;