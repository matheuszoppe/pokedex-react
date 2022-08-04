import React from "react";
import MagnifyingGlass from "../assets/MagnifyingGlass.svg";



const CardPokemon = ({setPokemon, dados}) => {
  
  const [searchPokemon, setSearchPokemon] = React.useState("");
  const inputElement = React.useRef();

  const haveData = dados !== null;

  //////////////// SEARCH POKEMON /////////////////

  function handleSearchPokemon(event) {
    event.preventDefault();
    setPokemon(searchPokemon);
    setSearchPokemon("");
    inputElement.current.focus();
  } 

  return (    
      <div className=" w-[280px] sm:w-[300px] h-[500px] bg-gray-100 rounded-[40px]  overflow-hidden shadow-md text-center flex flex-col gap-5 relative">
        <div className="bg-[url('./assets/bgCard.png')] bg-cover bg-no-repeat w-full h-[60%] flex justify-center relative">
          <form
            onSubmit={handleSearchPokemon}
            className="absolute top-8 flex shadow-md w-[240px] "
          >
            <label className="sr-only" htmlFor="search">Nome ou numero do pokemon</label>
            <input
              id="search"
              className="min-w-[150px] py-2 px-4 rounded-l-full  opacity-80 "
              type="search"
              value={searchPokemon}
              ref={inputElement}
              placeholder="⌲ Name or number"
              onChange={(event) =>
                setSearchPokemon(event.target.value.toLowerCase())
              }
            />
            <button className="bg-gray-400 w-14 flex items-center justify-center rounded-r-full opacity-80 ">
              <img src={MagnifyingGlass} alt="lupa" />
            </button>
          </form>
          <img
            className="w-[45%] pt-16"
            src={
              haveData
                ? dados["sprites"]["other"]["dream_world"]["front_default"]
                : ""
            }
            alt=""
          />
        </div>
        <div>
          <div className="px-8 flex flex-col items-center">
            <h1 className="text-2xl text-gray-800 font-bold capitalize">
              #{haveData ? dados.id : "00"} -{" "}
              {haveData ? dados.name : "Not Found"}
            </h1>
            <span className="capitalize text-gray-400 ">
              type: {haveData ? (dados.types.map((i)=>{return i.type.name+" "})) : "-"}
            </span>
            <ul className="grid grid-cols-2 gap-x-8 text-left pt-5 text-gray-800 font-medium">
              <li className="flex justify-between gap-x-5"><span>HP: </span><span>{haveData ? dados.stats[0].base_stat : "-"}</span></li>
              <li className="flex justify-between gap-x-5"><span>Ataque: </span><span>{haveData ? dados.stats[1].base_stat : "-"}</span></li>
              <li className="flex justify-between gap-x-5"><span>Defesa: </span><span>{haveData ? dados.stats[2].base_stat : "-"}</span></li>
              <li className="flex justify-between gap-x-5"><span>Atk Esp: </span><span>{haveData ? dados.stats[3].base_stat : "-"}</span></li>
            </ul>
          </div>
        </div>
      </div>  
   
  );
};

export default CardPokemon;
