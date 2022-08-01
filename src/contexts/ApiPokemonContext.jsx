import React from "react";
import axios from 'axios'


export const ApiPokemonContext = React.createContext()

export const ApiPokemonStorage = ({children}) =>{
  const pathname = window.location.pathname.replace("/", "");
  const [dados, setDados] = React.useState(null);
  const [pokemon, setPokemon] = React.useState(pathname);
  const baseURL = import.meta.env.VITE_API_URL
  React.useEffect(() =>{
    
    axios.get(`${baseURL}/${pokemon}`).then((reponse)=>{setDados(reponse.data)})
    
    // async function fetchPokemon(pokemon) {
    //   const response = await fetch(
    //     `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    //   );      
    //   if (response.status === 200) {
    //     const data = await response.json();
    //     setDados(data);
    //   } else setDados(null);
    // }
    // fetchPokemon(pokemon);
  }, [pokemon])


  return(
    <ApiPokemonContext.Provider value={{setPokemon, dados, pokemon}}>
      {children}
    </ApiPokemonContext.Provider>
  )
}