import Footer from "@/components/footer/Footer";
import BarraDeNavegacion from "@/components/navbar/Navbar";
import PodcastMain from "@/components/podcasts/PodcastMain";
import PodcastsSlider from "@/components/podcasts/PodcastsSlider";

export default function podcasts() {
  return (
    <>
      <BarraDeNavegacion />
      <div className="bg-black flex h-full pflex-col items-start justify-center">
        {/* Titulo de seccion podcast */}
        {/* <div>
          <h2 className="pt-[calc(150px)] pb-[calc(50px)] pl-[calc(100px)] text-5xl font-bold text-zinc-100">
            Podcasts
          </h2>
        </div> */}

        <PodcastMain />
      </div>
      <Footer />
    </>
  );
}
