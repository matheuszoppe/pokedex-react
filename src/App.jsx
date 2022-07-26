import CardPokemon from "./components/CardPokemon"
import InitialPokemons from "./components/InitialPokemons"



function App() {
  const { pathname } = window.location
  const isHome = pathname === '/'

  return (
    <div className="min-w-full min-h-screen flex items-center bg-gradient-to-t from-red-600 to-red-400">
      {isHome ? <InitialPokemons/> : <CardPokemon/>}
      
      {/* <CardPokemon/> */}
    </div>
  )
}

export default App
