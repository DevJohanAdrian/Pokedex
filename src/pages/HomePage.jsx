import { Grid, SearchPokemon } from "../components"

//lista de todos los pokemons
export const HomePage = () => {
  return (
    <>
      <main className="text-gray-400 bg-gray-900 body-font">
     
        <SearchPokemon onNewPokemon={(value) => onNewPokemon(value)} />
        <Grid />
      </main>
    </>




  )
}
