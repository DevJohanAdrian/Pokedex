import { useEffect, useState } from "react"
import { getPokemonByNameOrId } from "../helpers/getPokeByNameOrId";


// export const useFetchPokemon = (pokemonName) => {
//     const [pokemonData, setPokemonData] = useState({});
//     const [isLoading, setLoading] = useState(true);

//     const getPokemonData = async()=>{
//           const pokeData = await getPokemonByNameOrId(pokemonName);
//           setPokemonData(pokeData);
//           debugger
//           console.log(pokemonData)
//           setLoading(false);
//     }

//     useEffect(()=>{
//         getPokemonData();
//     }, []);


//   return {
//    pokemonData,
//    isLoading
//   }


// }


export const useFetchPokemon = () => {
  const [pokemonData, setPokemonData] = useState({
    data: null,
    hasError: false,
    error: null
  });
  const [isLoading, setLoading] = useState(true);

  const getPokemonData = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${0}&limit=${25}`; // trae los primeros 25 pokemons
    const response = await fetch(url);
    debugger
    if (!response.ok) {
      setPokemonData({
        data: null,
        hasError: true,
        error: {
          code: response.status,
          message: response.statusText
        }
      })
      setLoading(false);
      return;
    }
    const { results } = await response.json();
    setPokemonData({
      data: results,
      hasError: false,
      error: null
    });
    
    setLoading(false);
  }

  useEffect(() => {
    getPokemonData();
  }, []);


  return {
    data: pokemonData.data,
    error: pokemonData.error,
    hasError: pokemonData.hasError,
    isLoading
  }


}
