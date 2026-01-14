const RightCard = () => {
  return (
    <div className="
      w-full md:w-1/2
      h-[40vh] md:h-full
      bg-gray-800
      overflow-x-auto overflow-y-hidden
    ">
      <div className="flex gap-4 md:gap-6 p-4 md:p-8 min-w-max">
        <img src="/jb.jpg" className="h-40 md:h-64 lg:h-80 rounded-lg" />
        <img src="/taylor.jpg" className="h-40 md:h-64 lg:h-80 rounded-lg" />
        <img src="/camila.jpg" className="h-40 md:h-64 lg:h-80 rounded-lg" />
        <img src="/selena.jpg" className="h-40 md:h-64 lg:h-80 rounded-lg" />
        <img src="/zayn.jpg" className="h-40 md:h-64 lg:h-80 rounded-lg" />
      </div>
    </div>
  );
};

export default RightCard;
