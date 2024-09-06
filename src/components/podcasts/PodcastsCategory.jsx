"use client";

import PodcastCard3 from "./PodcastCard3";
import { datosPodcasts } from "@/data/datos.podcasts";

function PodcastCategory(podcast) {
  return (
    <div className="flex flex-row justify- w-full">
      <div className="bg-slate-100 w-1 -ml-6 mr-10 mt-16 -mb-6 rounded "></div>
      <div className="flex flex-col items-center justify- w-full">
        <div>
          <h2 className="pt-[calc(5px)]  pb-[calc(10px)] text-4xl font-bold text-zinc-100 text-center mb-10">
            Categorias
          </h2>
        </div>
        <div className="flex flex-row justify-center h-full">
          <div className="grid grid-cols-3 gap-2 border-solid boder-x-2 border-white rounded">
            {datosPodcasts.map((podcast) => (
              <div key={podcast.id}>
                <div className="">
                  <PodcastCard3 podcast={podcast} podcastName={podcast.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PodcastCategory;
