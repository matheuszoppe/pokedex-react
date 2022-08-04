import React from "react";
import CaretLeft from "../assets/CaretLeft.svg";
import CaretRight from "../assets/CaretRight.svg";
import CardPokemon from "../components/CardPokemon";

const SearchPokemon = () => {
  const [dados, setDados] = React.useState(null);
  const [pokemon, setPokemon] = React.useState(1);
  const [searchPokemon, setSearchPokemon] = React.useState("");
  const inputElement = React.useRef();

  ////////////////// FETCH ///////////////////////////
  React.useEffect(() => {
    async function fetchPokemon(pokemon) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      if (response.status === 200) {
        const data = await response.json();
        setDados(data);
      } else setDados(null);

    }
    fetchPokemon(pokemon);
  }, [pokemon]);
  console.log('render')
  const haveData = dados !== null;

  //////////////// SEARCH POKEMON /////////////////

  function handleSearchPokemon(event) {
    event.preventDefault();
    setPokemon(searchPokemon);
    setSearchPokemon("");
    inputElement.current.focus();
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
    <div className="m-auto relative ">
      <CardPokemon setPokemon={setPokemon} dados={dados}/>
      {/* <div className="w-[320px] h-[500px] bg-gray-100 rounded-[40px]  overflow-hidden shadow-md text-center flex flex-col gap-5 relative">
        <div className="bg-[url('./assets/bgCard.png')] bg-cover bg-no-repeat w-full h-[60%] flex justify-center relative">
          <form
            onSubmit={handleSearchPokemon}
            className="absolute top-8 flex shadow-md"
          >
            <input
              className="py-2 px-4 rounded-l-full text-center opacity-80 "
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
            <ul className="grid grid-cols-2 text-left pt-5 text-gray-800 font-medium">
              <li >HP: {haveData ? dados.stats[0].base_stat : "-"}</li>
              <li>Ataque: {haveData ? dados.stats[1].base_stat : "-"}</li>
              <li>Defesa: {haveData ? dados.stats[2].base_stat : "-"}</li>
              <li>Ataque Esp: {haveData ? dados.stats[3].base_stat : "-"}</li>
            </ul>
          </div>
        </div>
      </div> */}
      <button
        className="absolute top-[200px] left-[-100px]"
        onClick={handlePrevPokemon}
      >
        <img src={CaretLeft} alt="seta esquerda" />
      </button>
      <button
        className="absolute top-[200px] right-[-100px]"
        onClick={handleNextPokemon}
      >
        <img src={CaretRight} alt="seta esquerda" />
      </button>
    </div>
  );
}

export default SearchPokemon
