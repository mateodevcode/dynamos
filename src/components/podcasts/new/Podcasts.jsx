import Image from "next/image";
import React from "react";
import { BsPlayCircle } from "react-icons/bs";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { SlArrowRight } from "react-icons/sl";

const Podcasts = () => {
  return (
    <div className="h-full w-full dark:bg-gray-950 flex flex-col justify-start items-center pb-40">
      <div className="w-9/12 h-96 mt-32 flex flex-row justify-between items-center">
        <div className="relative w-8/12 h-96 bg-gray-950 dark:bg-gray-100 flex flex-row justify-center items-center">
          <IoIosArrowDropright className="rotate-180 text-white text-6xl absolute left-0 z-10 cursor-pointer" />
          <div
            className="h-96 blur-md w-full"
            style={{
              backgroundImage: `url('https://i.postimg.cc/GmYFbjGH/img-bienvenida.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="text-5xl font-bold text-zinc-100 blur-none absolute bg-black w-72 h-72 -mb-7 -ml-7 opacity-50">
            <div className="w-full flex flex-row items-center justify-center h-full">
              <h2>Podcasts</h2>
            </div>
          </div>
          <div className="text-5xl font-bold text-zinc-100 blur-none absolute bg-black w-72 h-72 -mt-7 -mr-7 opacity-50">
            <div className="w-full flex flex-row items-center justify-center h-full">
              <h2>Podcasts</h2>
            </div>
          </div>
          <div className="text-5xl font-bold text-zinc-100 blur-none absolute bg-green-600 w-72 h-72">
            <div
              className="w-full flex flex-row items-center justify-center h-full"
              style={{
                backgroundImage: `url('https://img.freepik.com/vektoren-kostenlos/detaillierte-podcast-logo-vorlage_23-2148786067.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="flex flex-row justify-center items-center -ml-2 -mt-4">
              <BsPlayCircle className="bg-white rounded-full text-4xl cursor-pointer text-blue-600" />
            </div>
          </div>
          <IoIosArrowDropright className="text-white text-6xl absolute right-0 cursor-pointer" />
        </div>
        <div className="w-4/12 h-96 bg-black dark:bg-gray-300 dark:text-black flex flex-col justify-between items-center text-white">
          <p></p>
          <h2 className="text-4xl font-bold mt-32 text-center px-4">
            Podcasts de la semana
          </h2>
          <p className="text-center px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            euismod, nunc eget dapibus.
          </p>
          <div className="flex flex-row justify-center items-center w-full mb-10">
            <FaRegCircle className="mx-1" />
            <FaRegCircle className="mx-1" />
            <FaCircle className="mx-1" />
            <FaRegCircle className="mx-1" />
            <FaRegCircle className="mx-1" />
            <FaRegCircle className="mx-1" />
            <FaRegCircle className="mx-1" />
          </div>
        </div>
      </div>

      <div className="w-9/12 h-96 mt-10 flex flex-row justify-between items-center">
        <div className="bg-slate-400/50 -mr-8 z-10 py-3 px-1 cursor-pointer">
          <SlArrowRight className="rotate-180 text-white text-3xl" />
        </div>

        <div className="w-40 h-40 bg-white border-2 border-black dark:border-white rounded-md hover:scale-[103%] cursor-pointer">
          <Image
            src="https://visionyvalor.es/wp-content/uploads/2024/03/PODCAST-2.png"
            alt="img-1"
            width={160}
            height={160}
            className="rounded-md"
          />
        </div>
        <div className="w-40 h-40 bg-white border-2 border-black dark:border-white rounded-md hover:scale-[103%] cursor-pointer">
          <Image
            src="https://visionyvalor.es/wp-content/uploads/2024/03/PODCAST-2.png"
            alt="img-1"
            width={160}
            height={160}
            className="rounded-md"
          />
        </div>
        <div className="w-40 h-40 bg-white border-2 border-black dark:border-white rounded-md hover:scale-[103%] cursor-pointer">
          <Image
            src="https://visionyvalor.es/wp-content/uploads/2024/03/PODCAST-2.png"
            alt="img-1"
            width={160}
            height={160}
            className="rounded-md"
          />
        </div>
        <div className="w-40 h-40 bg-white border-2 border-black dark:border-white rounded-md hover:scale-[103%] cursor-pointer">
          <Image
            src="https://visionyvalor.es/wp-content/uploads/2024/03/PODCAST-2.png"
            alt="img-1"
            width={160}
            height={160}
            className="rounded-md"
          />
        </div>
        <div className="w-40 h-40 bg-white border-2 border-black dark:border-white rounded-md hover:scale-[103%] cursor-pointer">
          <Image
            src="https://visionyvalor.es/wp-content/uploads/2024/03/PODCAST-2.png"
            alt="img-1"
            width={160}
            height={160}
            className="rounded-md"
          />
        </div>
        <div className="w-40 h-40 bg-white border-2 border-black dark:border-white rounded-md hover:scale-[103%] cursor-pointer">
          <Image
            src="https://visionyvalor.es/wp-content/uploads/2024/03/PODCAST-2.png"
            alt="img-1"
            width={160}
            height={160}
            className="rounded-md"
          />
        </div>

        <div className="bg-slate-400/50 -ml-8 py-3 px-1 cursor-pointer">
          <SlArrowRight className="text-white text-3xl" />
        </div>
      </div>

      <div className="w-9/12">
        <h3 className="mx-4 text-3xl font-semibold dark:text-white">Destacados</h3>
      </div>
      <div className="w-9/12 h-60 flex flex-row justify-between items-center">
        <div className="bg-slate-400/50 -mr-8 z-10 py-3 px-1 cursor-pointer">
          <SlArrowRight className="rotate-180 text-white text-3xl" />
        </div>

        <div className="w-52 h-52 border-2 border-black dark:border-white rounded-xl cursor-pointer flex flex-row justify-center items-center bg-black hover:opacity-100 opacity-50">
          <div
            className="text-5xl font-bold text-zinc-100 blur-sm absolute w-48 h-48"
            style={{
              backgroundImage: `url('https://img.freepik.com/vektoren-kostenlos/detaillierte-podcast-logo-vorlage_23-2148786067.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="w-40 h-40 blur-none z-10"
            style={{
              backgroundImage: `url('https://img.freepik.com/vektoren-kostenlos/detaillierte-podcast-logo-vorlage_23-2148786067.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="w-52 h-52 border-2 border-black dark:border-white rounded-xl cursor-pointer flex flex-row justify-center items-center bg-black hover:opacity-100 opacity-50">
          <div
            className="text-5xl font-bold text-zinc-100 blur-sm absolute w-48 h-48"
            style={{
              backgroundImage: `url('https://d1csarkz8obe9u.cloudfront.net/posterpreviews/podcast-logo%2C-podcast-show-logo-design-template-9e9253e9290d750086c3b5ccb665ab7f_screen.jpg?ts=1706016718')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="w-40 h-40 blur-none z-10"
            style={{
              backgroundImage: `url('https://d1csarkz8obe9u.cloudfront.net/posterpreviews/podcast-logo%2C-podcast-show-logo-design-template-9e9253e9290d750086c3b5ccb665ab7f_screen.jpg?ts=1706016718')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="w-52 h-52 border-2 border-black dark:border-white rounded-xl cursor-pointer flex flex-row justify-center items-center bg-black hover:opacity-100 opacity-50">
          <div
            className="text-5xl font-bold text-zinc-100 blur-sm absolute w-48 h-48"
            style={{
              backgroundImage: `url('https://img.freepik.com/vector-premium/diseno-vectores-podcasts_617585-130.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="w-40 h-40 blur-none z-10"
            style={{
              backgroundImage: `url('https://img.freepik.com/vector-premium/diseno-vectores-podcasts_617585-130.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="w-52 h-52 border-2 border-black dark:border-white rounded-xl cursor-pointer flex flex-row justify-center items-center bg-black hover:opacity-100 opacity-50">
          <div
            className="text-5xl font-bold text-zinc-100 blur-sm absolute w-48 h-48"
            style={{
              backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/012/018/557/small_2x/podcast-logo-design-vintage-microphone-logo-vector.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="w-40 h-40 blur-none z-10"
            style={{
              backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/012/018/557/small_2x/podcast-logo-design-vintage-microphone-logo-vector.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="w-52 h-52 border-2 border-black dark:border-white rounded-xl cursor-pointer flex flex-row justify-center items-center bg-black hover:opacity-100 opacity-50">
          <div
            className="text-5xl font-bold text-zinc-100 blur-sm absolute w-48 h-48"
            style={{
              backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/012/018/557/small_2x/podcast-logo-design-vintage-microphone-logo-vector.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="w-40 h-40 blur-none z-10"
            style={{
              backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/012/018/557/small_2x/podcast-logo-design-vintage-microphone-logo-vector.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="bg-slate-400/50 -ml-8 py-3 px-1 cursor-pointer">
          <SlArrowRight className="text-white text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
