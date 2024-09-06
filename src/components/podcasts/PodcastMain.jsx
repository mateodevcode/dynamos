import PodcastBarraReproduccion from "./PodcastBarraReproduccion";
import PodcastPopulars from "./PodcastPopulars";
import PodcastRecient from "./PodcastRecient";
import PodcastCategory from "./PodcastsCategory";
import PodcastsSlider from "./PodcastsSlider";

function PodcastMain() {
  return (
    <>
      <div className="my-10">
        <PodcastsSlider />
        <div className=" flex flex-row justify-start ">
          <div>
            <PodcastPopulars />
            <PodcastRecient />
            {/* <PodcastBarraReproduccion /> */}
          </div>
          <div>
            <PodcastCategory />
           
          </div>
        </div>
      </div>
    </>
  );
}

export default PodcastMain;
