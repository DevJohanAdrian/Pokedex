import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext"

export const PokemonProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [pokemonsList, setPokemonsList] = useState([])

  // Llamar todos los pokemones
	const getGlobalPokemons = async () => {
		const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

		const res = await fetch(URL);
		const data = await res.json();

		const promises = data.results.map(async pokemon => {
			const res = await fetch(pokemon.url);
			const data = await res.json();
			return data;
		});
		const results = await Promise.all(promises);

		setPokemonsList(results);
		setLoading(false);
	};


  useEffect(()=>{
    getGlobalPokemons();
  }, []);

  // Llama la informacion detallada de un pokemon por id
  const getPokemonById = async(id) =>{
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await  fetch(URL);
    const data = await res.json();
    return data;
  }
    

  return (
  <PokemonContext.Provider value={{
    // list of pokemons
    pokemonsList,
    // pokemon details
    getPokemonById,
    // loader
    loading,
    setLoading,
  }}>
    	{children}
  </PokemonContext.Provider>
  )
}
