import CardTeam from "./CardTeam";

async function Team() {
  return (
    <div
      className={`w-full flex flex-col justify-center items-center lg:pt-32 md:pt-32 sm:pt-24 bg-white dark:bg-gray-950`}
    >
      <div
        className={`max-h-max flex flex-col justify-center items-center md:rounded-xl`}
      >
        <div className="flex flex-col">
          <h2
            className={`font-sans font-bold lg:text-5xl md:text-5xl text-center md:mb-10 sm:text-3xl sm:mb-5 dark:text-white`}
          >
            Team Dynamos
          </h2>
          <p
            className={`text-center md:text-2xl sm:text-base md:mb-10 sm:mb-5 text-black dark:text-white lg:mx-40 md:mx-40 sm:mx-8`}
          >
            Únete a nuestra <strong>comunidad Dynamos</strong>, donde el amor y
            la fe nos unen. Juntos crecemos espiritualmente y construimos un
            camino de esperanza. ¡Te invitamos a formar parte de
            <strong> nuestra familia!</strong>
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center md:mb-20 sm:mb-10">
          <CardTeam />
        </div>
      </div>
    </div>
  );
}

export default Team;
