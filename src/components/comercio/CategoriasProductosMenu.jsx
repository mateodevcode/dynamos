import { listaCategorias } from "@/data/lista.categorias";

export default function CategoriasProductosMenu() {

  return (
    <div>
      <ul className="flex gap-2 justify-center">
        {listaCategorias.map((categoria) => (
          <li key={categoria.id}>
            <a className="box-border bg-orange-400 text-teal-50 font-bold px-3 py-2 rounded-full border-2 border-white hover:bg-white hover:text-orange-400 hover:border-2 hover:border-orange-400  transition-all esase-in-out">
              {categoria.nombre}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
