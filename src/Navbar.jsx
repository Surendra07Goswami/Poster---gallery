import React from 'react'
import Anime from './Components/Anime'
import Marvel from './Components/Marvel'
import DC from './Components/DC'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="h-20 w-full  bg-gray-800 text-white flex justify-between items-center  px-10">
      <h1 className=' text-3xl font-bold p-2'>Poster Gallery</h1>
      <div className='flex items-center justify-between flex-row gap-9 font-bold text-lg'>
         <Link to="/Home">Home</Link>
         <Link to="/Anime">Anime</Link>
         <Link to="/Marvel">Marvel</Link>
         <Link to="/DC">DC</Link>
      </div>
    </div>
  )
}

export default Navbar
