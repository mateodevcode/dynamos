import { datosPodcasts } from "@/data/datos.podcasts";

function PodcastSection() {
  return (
    <div className="flex flex-col h-60 items-start justify-around text-gray-400 pr-16 ">
        <h1 className="text-4xl text-blue-50 font-bold">{datosPodcasts[0].name} </h1>
        <p>
         {datosPodcasts[0].description}
        </p>
        <p>{datosPodcasts[0].host}</p>
        <p>{datosPodcasts[0].guests}</p>
        <button className="">Ver más...</button>
      </div>
  )
}

export default PodcastSection

