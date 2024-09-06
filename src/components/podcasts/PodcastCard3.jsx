import { FaCompactDisc } from "react-icons/fa";

function PodcastCard({ podcast }) {
  return (
    <div className="flex flex-col justify-center items-center w-24 h-24 m-auto p-1 bg-sky-400">
      <FaCompactDisc size={120} className="text-zinc-100" />
      <h3 className=" text-zinc-100 text-center w-16 text-xs">{podcast.categories}</h3>
    </div>
    
  );  
}  
  
export default PodcastCard;
