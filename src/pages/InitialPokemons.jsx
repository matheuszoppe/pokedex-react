import React from "react";

import { ApiPokemonContext } from "./../contexts/ApiPokemonContext";

const InitialPokemons = () => {
  const {setPokemon, pokemon} = React.useContext(ApiPokemonContext);
  const [background, setBackground] = React.useState(
    "bg-gradient-to-t from-red-600 to-red-400"
  );

  const bgstyle =
    "bg w-full h-screen bg-gradient-to-t  flex flex-col items-center justify-center gap-16 transition-colors";



  return (
    <div className={[bgstyle, background]} style={{ background: background }}>
      <h1 className="text-3xl text-slate-100 font-bold">
        Choose your starter Pokemon!
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-16">
        <a
          href=""
          
          className="text-center font-medium text-slate-100 text-xl capitalize cursor-pointer"
          onMouseEnter={() => {
            setBackground("bg-gradient-to-t from-green-800 to-green-400");
          }}
          onClick = {(event)=>{
            event.preventDefault()
            console.log(pokemon)
            setPokemon(1)
            console.log(pokemon)
          }}
        >
          <div className="w-28 h-28 rounded-full flex items-center justify-center bg-gradient-to-t from-green-600 to-green-400 mb-3 border-4 border-orange-200 shadow-lg">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
              alt=""
            />
          </div>
          <p>bulbasaur</p>
        </a>
        <a
          href="charmander"
          className="text-center font-medium text-slate-100 text-xl capitalize cursor-pointer"
          onMouseEnter={() => {
            setBackground("bg-gradient-to-t from-orange-800 to-orange-400");
          }}
        >
          <div className="w-28 h-28 rounded-full flex items-center justify-center bg-gradient-to-t from-orange-600 to-orange-400 mb-3 border-4 border-orange-200">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif"
              alt=""
            />
          </div>
          <p>charmander</p>
        </a>
        <a
          href="squirtle"
          className="text-center font-medium text-slate-100 text-xl capitalize cursor-pointer"
          onMouseEnter={() => {
            setBackground("bg-gradient-to-t from-indigo-800 to-indigo-400");
          }}
        >
          <div className="w-28 h-28 rounded-full flex items-center justify-center bg-gradient-to-t from-indigo-600 to-indigo-400 mb-3 border-4 border-orange-200">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif"
              alt=""
            />
          </div>
          <p>squirtle</p>
        </a>
      </div>
      <a
        href="/1"
        className="bg-red-700 hover:bg-red-600 text-red-100 text-xl font-semibold px-10 py-3 rounded-full border-2 border-red-200 "
      >
        Access PokéDex
      </a>
    </div>
  );
};

export default InitialPokemons;
