import Navbar from "./Navbar";
import Options from "./Options";
import Panel from "./Panel";


const PanelAdmin = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="flex flex-row justify-start items-center w-full">
        <Options />
        <Panel />
      </div>
    </div>
  );
};

export default PanelAdmin;
