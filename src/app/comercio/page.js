import Anuncios from "@/components/comercio/Anuncios";
import CategoriaProductos from "@/components/comercio/CategoriaProductos";
import CategoriasProductosMenu from "@/components/comercio/CategoriasProductosMenu";
import Header from "@/components/comercio/Header";

import { listaCategorias } from "@/data/lista.categorias";
export default function comercio() {

  const categorias = listaCategorias;
  return (
    <>

      <Header />
      <CategoriasProductosMenu />
      <Anuncios />
      {categorias.map((categoria) => (
        <CategoriaProductos
          key={categoria.id}
          nombre={categoria.nombre}
          descripcion={categoria.descripcion}
          productos={categoria.productos}
        />
      ))}
    </>
  );
}
