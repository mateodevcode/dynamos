import CardTestimonio from "./CardTestimonio";
import { connectMongoDB } from "@/lib/mongodb";
import Testimonio from "@/models/testimonio";

const cargarTestimonios = async () => {
  connectMongoDB();
  const testimonios = await Testimonio.find({});
  return testimonios;
};

async function Testimonios() {
  const testimonioDynamo = await cargarTestimonios();

  return (
    <div
      className={`w-full lg:pt-32 md:pt-32 sm:pt-24 bg-white dark:bg-gray-950`}
    >
      <div>
        <h2 className="text-center md:text-5xl font-bold select-none sm:text-3xl sm:mb-5 text-black dark:text-white">
          Nuestros Testimonios
        </h2>
        <div className="flex w-full justify-center items-center text-black dark:text-white">
          <CardTestimonio testimonioDynamo={testimonioDynamo} />
        </div>
      </div>
    </div>
  );
}

export default Testimonios;
