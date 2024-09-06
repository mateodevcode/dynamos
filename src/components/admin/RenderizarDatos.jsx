import Eventos from "./renderizardatos/Eventos";
import Testimonios from "./renderizardatos/Testimonios";
import UsersTeam from "./renderizardatos/UsersTeam";

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
    default:
      return (
        <div>
          <h1>Usuarios</h1>
        </div>
      );
  }
};

export default RenderizarDatos;
