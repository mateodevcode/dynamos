import NoticiaCard from "./NoticiaCard"

export default function ContenedorNoticias({noticias}) {
console.log(noticias)
  return(
    <div className="flex flex-wrap gap-4 justify-between mx-auto py-8 px-24">
        {noticias.map((noticia, index) => (
          <NoticiaCard 
          key={index}
          {...noticia}
          />
          
        ))}
    </div>
  )
}