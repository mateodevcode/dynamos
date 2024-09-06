import { FaCompactDisc } from "react-icons/fa";
import PodcastBarraReproduccion from "./PodcastBarraReproduccion";


function PodcastCard2({ podcast }) {
  return (
    <div className="w-full h-20 bg-sky-200 flex flex-row items-center">
      <div className="flex flex-row justify-center items-center w-20 h-20 m-auto p-4 bg-sky-400">
        <FaCompactDisc size={120} className="text-zinc-100" />
      </div>
      <div className="flex flex-row items-center pr-3  bg-sky-200">
        <div className="flex flex-col h-20 items-start justify-center px-2">
          <h3 className="  text-black  text-start md:w-[148px] text-xl ">
            {podcast.name}
          </h3>
          <p>{podcast.duration}</p>
        </div>
        {/* <PodcastBarraReproduccion /> */}
      </div>
    </div>
  );
}

export default PodcastCard2;
