import CardEvento from "@/components/eventos/CardEvento";

function Eventos() {
  return (
    <div
      className={`w-full flex flex-col justify-center items-center lg:pt-24 md:pt-24 sm:pt-12 bg-white dark:bg-gray-950`}
    >
      <div className="flex flex-col justify-center items-center lg:w-10/12 md:w-full">
        <div className="lg:w-11/12 md:w-10/12 sm:w-11/12 dark:text-white text-black">
          <h2 className="lg:text-5xl md:text-5xl font-bold md:mb-10 sm:text-3xl sm:mt-10 sm:mb-5 sm:text-center">
            Eventos Dynamos
          </h2>
          <p className="md:mb-10 lg:text-2xl md:text-2xl sm:text-base sm:mb-3 text-center">
            No te pierdas ninguno de <strong>nuestros eventos</strong>. Aquí
            compartiremos y exploraremos juntos los acontecimientos que han
            marcado y marcarán <strong>nuestra comunidad</strong>. ¡Únete a
            nosotros en este momento especial!
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 lg:w-full md:w-10/12 sm:mb-10 md:mb-40">
          <CardEvento />
        </div>
      </div>
    </div>
  );
}

export default Eventos;
