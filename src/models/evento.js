import mongoose, { models, Schema } from "mongoose";

const eventoSchema = new Schema(
    {
        titulo: {type: String, required: true},
        descripcion: {type: String, required: true},
        descripcionCompleta: {type: String, required: true},
        fecha: {type: String, required: true},
        autor: {type: String, required: true},
        imgAutor: {type: String, required: true},
        imgPrincipal: {type: String, required: true}, 
        img: {type: [String], default: []},
        iconImg: {type: String, required: true},
        video: {type: [String], default: []},
        redes: {
            type: Object,
            default: {
              facebook: "",
              instagram: ""
            }
        }
    },
    { timestamps: true }
)
const Evento = models.Evento || mongoose.model("Evento", eventoSchema);
export default Evento;