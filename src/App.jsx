import React from 'react'
import "./App.css";
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Anime from './Components/Anime';
import Marvel from './Components/Marvel';
import DC from './Components/DC';
import Footer from './Footer';
import Error from './Components/Error';


const App = () => {
  return (
    
        <div className='bg-black text-white h-full w-full'>
          <Navbar />
          <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/anime' element={<Anime />} />
          <Route path='/marvel' element={<Marvel />} />
          <Route path='/dc' element={<DC />} />
          
          <Route path="*" element={<Error />} />
          </Routes>
          <footer><Footer /></footer>
        </div>
  
  )
}

export default App



