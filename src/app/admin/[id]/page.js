"use client";

import RenderizarDatos from "@/components/admin/RenderizarDatos";

const Panel = ({ params }) => {
  return (
    <div className="bg-slate-100 w-full flex lg:flex-row md:flex-row sm:flex-col justify-start items-start min-h-screen">
      <RenderizarDatos datos={params.id} />
    </div>
  );
};

export default Panel;
