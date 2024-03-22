export const getPokemonByNameOrId = async (nameOrId) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${nameOrId}`;
    const response = await fetch(url);
    const data = await response.json();


    
    const info = {
        imgs: data.sprites.other["official-artwork"].front_default,
        name: data.name,
        height: data.height, 
        weight: data.weight, 
        types: data.types
    }
      


    return info;
   
}