import React from 'react'
import LeftCard from './LeftCard' 
import RightCard from './RightCard'

const Home = () => {
  return (
    <div className=' h-[calc(100vh-4rem)] w-full overflow-hidden flex justify-center items-center mt-12'>

    <LeftCard />

    <RightCard />

    </div>
  )
}

export default Home

