import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Podcasts from "@/components/podcasts/new/Podcasts";

export default function podcasts() {
  return (
    <>
      <Navbar />
      <div className="">
        <Podcasts />
        {/* Titulo de seccion podcast */}
        {/* <div>
          <h2 className="pt-[calc(150px)] pb-[calc(50px)] pl-[calc(100px)] text-5xl font-bold text-zinc-100">
            Podcasts
          </h2>
        </div> */}

        {/* <PodcastMain /> */}
      </div>
      <Footer />
    </>
  );
}
