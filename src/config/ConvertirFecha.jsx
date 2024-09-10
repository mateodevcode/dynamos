
const ConvertirFecha = (evento) => {
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  // Dividir la fecha en partes
  const [dia, mes,  año] = evento.split("/");

  // Convertir el mes numérico en nombre
  const nombreMes = meses[parseInt(mes, 10) - 1]; // Restamos 1 porque los índices del array empiezan en 0

  // Formar la nueva cadena con el formato "día nombre_mes año"
  return `${dia} ${nombreMes} ${año}`;
};

export default ConvertirFecha;
