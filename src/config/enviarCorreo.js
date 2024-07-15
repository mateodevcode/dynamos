import { datosCorreo } from "../data/datos.correo";

export const enviarCorreo = (event) => {
  event.preventDefault();
  const destinatario = datosCorreo.destinatario;
  const asunto = datosCorreo.asunto;
  const cuerpoCorreo = datosCorreo.mensaje;
  const mailtoURL = `mailto:${destinatario}?subject=${encodeURIComponent(
    asunto
  )}&body=${encodeURIComponent(cuerpoCorreo)}`;
  window.location.href = mailtoURL;
};
