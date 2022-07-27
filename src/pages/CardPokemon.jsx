import React from "react";
import arrowLeft from "../assets/ArrowCircleLeft.png";
import { ApiPokemonContext } from './../contexts/ApiPokemonContext';

const CardPokemon = () => {
  const pathname = window.location.pathname.replace("/", "");
  const {dados, setPokemon} = React.useContext(ApiPokemonContext)
  // const [dados, setDados] = React.useState(null);
  // const [pokemon, setPokemon] = React.useState(pathname);
  const [searchPokemon, setSearchPokemon] = React.useState(1);

  if(dados === null) return null
  
  
  ///////////  FETCH   ///////////////////////////////////////////////
  // React.useEffect(
  //   () => {
  //     async function fetchPokemon(pokemon) {
  //       const response = await fetch(
  //         `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  //       );
  //       if (response.status === 200) {
  //         const data = await response.json();
  //         setDados(data);
  //       } else setDados(null);
  //     }
  //     fetchPokemon(pokemon);     
  //   },
  //   [pokemon]
  // );

  const haveData = dados !== null;

  function handleSearchPokemon(event) {
    event.preventDefault();
    setPokemon(searchPokemon);
  }
  

  /////////  BOTOES /////////////////////////

  function handleNextPokemon() {
    setPokemon(dados.id + 1);
  }

  function handlePrevPokemon() {
    if (dados.id > 1) {
      setPokemon(dados.id - 1);
    }
  }

  return (
    <div className="w-[300px] h-[500px] bg-red-600 rounded-3xl m-auto overflow-hidden border-2 border-black shadow-md text-center flex flex-col justify-between">
      <a href="/" className="absolute top-5 left-5">
        <img src={arrowLeft} alt="" />
      </a>
      <div className="bg-[url('./assets/bgCard.png')] bg-cover bg-no-repeat w-full h-[60%] flex justify-center relative">
        <form onSubmit={handleSearchPokemon} className="search absolute top-5">
          <input
            className="py-2 px-4 rounded-full text-center opacity-2 border-2 border-black"
            type="search"
            placeholder="⌲ Name or number"
            onChange={(event) =>
              setSearchPokemon(event.target.value.toLowerCase())
            }
          />
        </form>
        <img
          className="w-[50%] pt-16"
          src={
            haveData
              ? dados["sprites"]["other"]["dream_world"]["front_default"]
              : ""
          }
          alt=""
        />
      </div>
      <div>
        <h1 className="text-2xl text-red-50 font-bold capitalize">
          #{haveData ? dados.id : "00"} - {haveData ? dados.name : "Not Found"}
        </h1>
        <span className="capitalize text-red-300">
          type: {haveData ? dados.types[0].type.name : "-"}
        </span>
      </div>
      <div className="flex justify-between w-full h-[10%] text-red-100 font-bold border-t-2 border-red-300">
        <button
          className="bg-red-700 w-full border-r-2 border-red-300 hover:bg-red-800"
          onClick={handlePrevPokemon}
        >
          ← Prev
        </button>
        <button
          onClick={handleNextPokemon}
          className="bg-red-700 w-full  hover:bg-red-800"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default CardPokemon;
