import CarruselProductos from "./CarruselProductos";

export default function CategoriaProductos({nombre, descripcion, productos}) {

  return(
    <div className=" flex flex-col item-center justify-center mt-8 mx-[10rem] box-border md:m-16 sm:m-16">
    <h2 className="w-fit text-5xl font-thin mb-2">{nombre}</h2>
      <p className="w-fit mb-6">{descripcion}</p>
      <div>
      <CarruselProductos
        productos={productos}
        />
      </div> 
      
    </div>
  );
};
