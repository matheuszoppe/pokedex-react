import React from "react";


export const ApiPokemonContext = React.createContext()

export const ApiPokemonStorage = ({children}) =>{
  const pathname = window.location.pathname.replace("/", "");
  const [dados, setDados] = React.useState(null);
  const [pokemon, setPokemon] = React.useState(pathname);

  React.useEffect(() =>{
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
  }, [pokemon])


  return(
    <ApiPokemonContext.Provider value={{setPokemon, dados, pokemon}}>
      {children}
    </ApiPokemonContext.Provider>
  )
}