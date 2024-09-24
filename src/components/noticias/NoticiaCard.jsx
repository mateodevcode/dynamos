import Image from "next/image"
import Link from "next/link"
import GeneradorUrl from "@/config/GeneradorUrl";

const NoticiaCard = ({titulo, fecha, foto, descripcion, seccion, nombreCategoria}) => {

  return(
    <Link href={`http://localhost:3000/noticias/${GeneradorUrl(seccion)}/${GeneradorUrl(titulo)}`} >
      <div className="bg-[#ffedac] dark:bg-zinc-700 cursor-pointer" >
        <div className="w-full">
          <Image className="w-full"
            width={300}
            height={150}
            alt={titulo}
            src={foto}
          />
        </div>
        <div className="flex flex-col justify-between w-4/5 px-2 py-1">
          <h3 className="leading-5 text-lg font-bold dark:text-zinc-200">{titulo}</h3>
          <p className="text-sm my-2 dark:text-zinc-100">{fecha}</p>
        </div>
      </div>
    </Link>
  )
};

export default NoticiaCard