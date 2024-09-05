import ConvertirFecha from "@/config/ConvertirFecha";

const FechaFinal = ({evento}) => {
  const fechaFinal = ConvertirFecha(evento);
  return <p>{fechaFinal}</p>;
};

export default FechaFinal;
