const LeftCard = () => {
  return (
    <div className="
      w-full md:w-1/2
      h-[60vh] md:h-full
      bg-[url('/intro.jpg')]
      bg-cover bg-center
      flex items-end md:items-center
      justify-center
      p-4
    ">
      <p className="
        max-w-md
        bg-black/60
        backdrop-blur-md
        text-white
        text-sm md:text-lg
        p-4 md:p-6
        rounded-2xl
        border border-gray-400
      ">
        Hello! I'm a front-end developer who enjoys creating visually appealing
        and functional web projects. This Poster Gallery is a small React-based
        project where I display posters from categories like Marvel, DC, and
        Anime. I built this project to improve my React skills and experiment
        with layouts and styling.
      </p>
    </div>
  );
};

export default LeftCard;
