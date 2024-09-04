const HeaderTeam = () => {
  return (
    <div className="flex flex-col">
      <h2
        className="font-sans font-bold lg:text-5xl md:text-5xl text-center md:mb-10 sm:text-3xl sm:mb-5 dark:text-white"
      >
        Team Dynamos
      </h2>
      <p
        className={`text-center md:text-2xl sm:text-base md:mb-10 sm:mb-5 text-black dark:text-white lg:mx-40 md:mx-20 sm:mx-8`}
      >
        Únete a nuestra <strong>comunidad Dynamos</strong>, donde el amor y la
        fe nos unen. Juntos crecemos espiritualmente y construimos un camino de
        esperanza. ¡Te invitamos a formar parte de
        <strong> nuestra familia!</strong>
      </p>
    </div>
  );
};

export default HeaderTeam;
