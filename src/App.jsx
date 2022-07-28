import { ApiPokemonStorage } from "./contexts/ApiPokemonContext"
import CardPokemon from "./pages/CardPokemon"
import InitialPokemons from "./pages/InitialPokemons"



function App() {
  const { pathname } = window.location
  const isHome = pathname === '/'

  return (
    <ApiPokemonStorage>
    <div className="min-w-full min-h-screen flex items-center bg-gradient-to-t from-red-600 to-red-400">
      {isHome ? <InitialPokemons/> : <CardPokemon/>}
      
      
    </div>
    </ApiPokemonStorage>
  )
}

export default App
