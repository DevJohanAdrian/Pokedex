import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import { Grid, SearchPokemon } from './components'
import { PokemonProvider } from './context/PokemonProvider'
import { AppRouter } from './routes/AppRouter'




export const App = () => {
  const [pokemons, setPokemons] = useState(["mewtwo"]);

  const onNewPokemon = (newPokemon) => {
    debugger
    if (pokemons.includes(newPokemon)) return;
    setPokemons([newPokemon, ...pokemons])
  }

  return (
    <>
      <h1 className="my-4 text-3xl font-bold text-center text-green-500 underline" >Pokedex</h1>
      {/* <SearchPokemon onNewPokemon={(value) => onNewPokemon(value)} /> */}
      <PokemonProvider>
        <AppRwouter />
        {/* <Grid /> */}
      </PokemonProvider>


    </>
  )
}


