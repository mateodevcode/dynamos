import { useEffect, useState } from "react";

const ConvertirFecha = (evento) => {
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    const [dia, mes, año] = evento.fecha.split("/").map(Number);
    const fecha = new Date(año, mes - 1, dia);
    const opciones = { year: "numeric", month: "long", day: "numeric" };
    const fechaFormateada = fecha.toLocaleDateString("es-ES", opciones);
    const partesFecha = fechaFormateada.split(" ");
    const fechaFinal = `${partesFecha[2]} ${partesFecha[0]} ${partesFecha[4]}`;
    setFecha(fechaFinal);
  }, [evento]);
  return fecha;
};

export default ConvertirFecha;
