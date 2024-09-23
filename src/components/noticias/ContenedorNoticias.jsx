import NoticiaCard from "./NoticiaCard";

  const ContenedorNoticias = ({ seccion, noticias }) => {
  const altaPrioridad = "col-span-5 row-span-1";
  const mediaPrioridad = "col-span-3 row-span-1";
  const bajaPrioridad = "col-span-2";

  console.log(noticias);

  return (
    <div className="grid grid-cols-8 grid-rows-2 gap-4 mx-auto py-8 px-24">
      {noticias.slice(0, 5).map((noticia, index) => {
        let className = bajaPrioridad; // valor por defecto
        if (noticia.prioridad === "altaPrioridad") {
          className = altaPrioridad;
        } else if (noticia.prioridad === "mediaPrioridad") {
          className = mediaPrioridad;
        }

        return (
          <div key={index} className={className}>
            <NoticiaCard 
            seccion={seccion}
            {...noticia} />
          </div>
        );
      })}
    </div>
  );
};

export default ContenedorNoticias;
