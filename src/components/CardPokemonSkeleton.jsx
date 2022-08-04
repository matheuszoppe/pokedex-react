import React from 'react'
import Pokeball from "../assets/pokeball.png";

const CardPokemonSkeleton = () => {
  return (
    <div className="w-[280px] sm:w-[300px] h-[500px] bg-gray-100 rounded-[40px]  overflow-hidden shadow-md text-center flex flex-col gap-5 relative">
        <div className="bg-[url('./assets/bgCard.png')] bg-cover bg-no-repeat w-full h-[60%] flex justify-center items-center relative">          
          <img
            className="w-40 h-40 animate-spin"
            src={Pokeball}
            alt=""
          />
        </div>
        <div className='animate-pulse'>
          <div className="px-8 pt-4 flex flex-col items-center">
            <h1 className=" h-5 w-40 bg-gray-400 mb-1">             
              
            </h1>
            <span className="h-3 w-20 bg-gray-400 ">
              
            </span>
            <ul className="grid grid-cols-2 gap-4 text-left pt-5 text-gray-800 font-medium">
              <li className="h-5 w-32 bg-gray-400 "></li>
              <li className="h-5 w-32 bg-gray-400 "></li>
              <li className="h-5 w-32 bg-gray-400 "></li>
              <li className="h-5 w-32 bg-gray-400 "></li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default CardPokemonSkeleton
