import React from "react";
import { ApiPokemonStorage, ApiPokemonContext } from "./contexts/ApiPokemonContext"
import CardPokemon from "./pages/CardPokemon"




function App() {
  const { pokemon } = React.useContext(ApiPokemonContext);  
 
  return (
    <ApiPokemonStorage>
    <div className="min-w-full min-h-screen flex items-center bg-gradient-to-t from-red-600 to-red-400">
    <CardPokemon/>    
      
    </div>
    </ApiPokemonStorage>
  )
}

export default App
