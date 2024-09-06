import { FaCompactDisc } from "react-icons/fa";

function PodcastCard({ podcast }) {
  return (
    <div
      className="w-56 h-56"
    >
      <div className="flex justify-center items-center w-44 h-44 m-auto p-8 bg-sky-400 rounded">
        <FaCompactDisc size={120} className="text-zinc-100" />
      </div>
      <h3 className="mt-4 text-zinc-100 text-center text-2xl">{podcast.name}</h3>
    </div>
  );
}
  
export default PodcastCard;

