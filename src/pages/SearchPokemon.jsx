import React from "react";
import CaretLeft from "../assets/CaretLeft.svg";
import CaretRight from "../assets/CaretRight.svg";
import CardPokemon from "../components/CardPokemon";
import CardPokemonSkeleton from "../components/CardPokemonSkeleton";

const SearchPokemon = () => {
  const [dados, setDados] = React.useState(null);
  const [pokemon, setPokemon] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false)
  const [searchPokemon, setSearchPokemon] = React.useState("");
  const inputElement = React.useRef();

  ////////////////// FETCH ///////////////////////////
  React.useEffect(() => {
    setIsLoading(true)
    async function fetchPokemon(pokemon) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      if (response.status === 200) {
        const data = await response.json();
        setDados(data);
      } else setDados(null);
      setIsLoading(false)
    }
    fetchPokemon(pokemon);
  }, [pokemon]);
  console.log('render')
  const haveData = dados !== null;
  

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
      {isLoading ? <CardPokemonSkeleton/> : <CardPokemon setPokemon={setPokemon} dados={dados}/>}      
      <button
        className="absolute top-[250px] left-[-40px] sm:top-[200px] sm:left-[-100px]"
        onClick={handlePrevPokemon}
      >
        <img className="w-10 sm:w-full" src={CaretLeft} alt="seta esquerda" />
      </button>
      <button
        className="absolute top-[250px] right-[-40px] sm:top-[200px] sm:right-[-100px]"
        onClick={handleNextPokemon}
      >
        <img className="w-10 sm:w-full" src={CaretRight} alt="seta esquerda" />
      </button>
    </div>
  );
}

export default SearchPokemon
