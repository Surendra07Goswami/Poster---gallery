import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="h-16 w-full bg-gray-800 flex items-center justify-between px-4 md:px-10">
      <h1 className="text-xl md:text-3xl font-bold">Poster Gallery</h1>

      <div className="hidden md:flex gap-8 font-bold text-lg">
        <Link to="/Home">Home</Link>
        <Link to="/Anime">Anime</Link>
        <Link to="/Marvel">Marvel</Link>
        <Link to="/DC">DC</Link>
      </div>
    </div>
  );
};

export default Navbar;
