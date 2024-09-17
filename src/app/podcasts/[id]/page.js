import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full pt-32">
        <div className="w-10/12 h-96 bg-green-600 border-b-8 border-black flex flex-row justify-center items-center">
            <div className="w-8/12 h-96 bg-blue-600">

            </div>
            <div className="w-4/12 h-96 bg-red-600">

            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
