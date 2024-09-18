import Image from "next/image"

export default function NoticiaCard({titulo, fecha, foto, descripcion}) {


  return(
    <div className="bg-[#ffedac]">
      <div className="w-60">
        <Image 
          width={300}
          height={150}
          alt={titulo}
          src={foto}
        />
      </div>
      <div className="flex flex-col justify-between w-52 px-2 py-1">
        <h3 className="leading-5 text-lg font-bold">{titulo}</h3>
        <p className="text-sm my-2">{fecha}</p>
      </div>
    </div>
  )
};