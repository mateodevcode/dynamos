import Titulares from "./Titulares";

const TituloSeccion = ({nombre, descripcion}) => {

    return (
        <div className="mx-24 p-4 mt-4 bg-amber-500 dark:bg-zinc-900 rounded">
            <div>
                <h1 className="text-left text-6xl font-bold dark:text-amber-500">{nombre}</h1>
                <div className="w-full h-1 bg-black dark:bg-zinc-950"></div>
                <p className="dark:text-slate-500">{descripcion}</p>
            </div>
            <div className="pt-8">
                <Titulares />
            </div>
        </div>
    );
};

export default TituloSeccion;