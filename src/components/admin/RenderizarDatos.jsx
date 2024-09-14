import Eventos from "./renderizardatos/Eventos";
import Testimonios from "./renderizardatos/Testimonios";
import UsersTeam from "./renderizardatos/UsersTeam";
import Usuarios from "./renderizardatos/Usuarios";

const RenderizarDatos = ({ datos }) => {
  switch (datos) {
    case "userTeam":
      return (
        <UsersTeam datos={datos} />
      );
    case "evento":
      return (
        <Eventos datos={datos} />
      );
    case "testimonio":
      return (
        <Testimonios datos={datos} />
      );
    case "user":
      return (
        <Usuarios datos={datos} />
      );
  }
};

export default RenderizarDatos;
