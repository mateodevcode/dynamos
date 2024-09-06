"use client";

import { useState, useEffect } from "react";
import PodcastCard2 from "./PodcastCard2";
import { datosPodcasts } from "@/data/datos.podcasts";

function PodcastPopulars(podcast) {
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === datosPodcasts.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? datosPodcasts.length - 1 : prev - 1));
  };

  const selectSlide = (index) => {
    setCurrentSlide(index);
  };

  const calculateOffset = () => {
    const slideWidth = 176; // 44 * 4 = 176px (w-44 en rem)
    const gapWidth = 8; // 0.5rem gap
    const containerWidth = 528; // Ancho del contenedor visible (3 tarjetas)
    const totalWidth = slideWidth + gapWidth;
    const centeringOffset = (containerWidth - slideWidth) / 2;

    let offset = currentSlide * totalWidth - centeringOffset;

    // Ajustes para el inicio y final del carrusel
    const maxOffset = datosPodcasts.length * totalWidth - containerWidth;
    offset = Math.max(0, Math.min(offset, maxOffset));

    return offset;
  };
  return (
    <div className="flex flex-col mb-5">
      <div>
        <h2 className="pt-[calc(5px)]  pl-[calc(100px)] text-4xl font-bold text-zinc-100">
          Populares
        </h2>
      </div>
      <div className="p-4 flex flex-row ml-8 mr-10 items-center">
        <div>
          <button
            onClick={prevSlide}
            className="bg-gray-400 w-8 h-6 sliderLeft text-white px-3 py-1 rounded t"
          ></button>
        </div>
        <div className="relative p-2 w-[800px] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${calculateOffset()}px)`,
              gap: "8rem",
            }}
          >
            {datosPodcasts.map((podcast, index) => (
              <div
                key={podcast.id}
                className="w-24 flex-shrink-0 flex justify-center items-center"
                onClick={() => selectSlide(index)}
              >
                <div
                  className={`transition-all duration-500 cursor-pointer w-full ${
                    index === currentSlide
                      ? "scale-75 opacity-100"
                      : "scale-75 opacity-40 hover:opacity-60"
                  }`}
                >
                  <PodcastCard2 podcast={podcast} podcastName={podcast.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <button
            onClick={nextSlide}
            className="bg-gray-400 w-8 h-6 sliderRight text-white px-3 py-1 rounded text-sm"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default PodcastPopulars;
