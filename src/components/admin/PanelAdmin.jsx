import Navbar from "@/components/admin/navbar";
import { Panel } from "./Panel";
import Options from "./Options";

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
