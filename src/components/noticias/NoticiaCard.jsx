import Image from "next/image"
import Link from "next/link"

export default function NoticiaCard({titulo, fecha, foto, descripcion, seccion}) {

  function normalizarTexto(texto) {
    if (!texto) return '';
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/ /g, "-").toLowerCase();
  }

  return(
    <Link href={`http://localhost:3000/noticias/${normalizarTexto(seccion)}/${normalizarTexto(titulo)}`}>
      {console.log(normalizarTexto(titulo))
      }
      <div className="bg-[#ffedac] cursor-pointer" >
        <div className="w-full">
          <Image className="w-full"
            width={300}
            height={150}
            alt={titulo}
            src={foto}
          />
        </div>
        <div className="flex flex-col justify-between w-4/5 px-2 py-1">
          <h3 className="leading-5 text-lg font-bold">{titulo}</h3>
          <p className="text-sm my-2">{fecha}</p>
        </div>
      </div>
    </Link>
  )
};