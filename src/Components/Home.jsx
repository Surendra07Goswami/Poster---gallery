import LeftCard from './LeftCard';
import RightCard from './RightCard';

const Home = () => {
  return (
    <div className="
      w-full 
      min-h-[calc(100vh-4rem)] 
      flex 
      flex-col 
      md:flex-row
      overflow-hidden
    ">
      <LeftCard />
      <RightCard />
    </div>
  );
};

export default Home;
