import { useContext, useEffect, useState } from "react";
// import { useFetchPokemon } from "../hooks/useFetchPokemon";
import { PokeBasicInfo } from "./PokeBasicInfo";
import { PokemonContext } from "../context/PokemonContext";

export const Grid = () => {
    // const [pokeList, setPokeList] = useState([]);
    // const { data, error, hasError, isLoading } = useFetchPokemon();

    const { pokemonsList, pokemonFiltered, loading } = useContext(PokemonContext);



    // useEffect(() => {
    //     setPokeList(pokemonData);

    // }, [pokemonData]);

    // const listItems = pokemonData.map((item) =>
    //     <li key={item.name.toString()}>
    //         {item.name}
    //     </li>
    // );



    return (
        <>
            {/* <h3>{ Pokemon }</h3> */}
            {
                loading && (<h2>Cargando...</h2>)
            }
            <section>
                <div className="container px-5 py-24 mx-auto">
              
                    <div className="flex flex-wrap -m-4">

                        {pokemonFiltered.length ? (pokemonFiltered?.map((item) => {
                            return <PokeBasicInfo key={item.id}
                                id={item.id} pokemonName={item.name} img={item.sprites.other["official-artwork"].front_default} types={item.types} />
                        }))

                            :

                            (pokemonsList?.map((item) => {
                                return <PokeBasicInfo key={item.id}
                                    id={item.id} pokemonName={item.name} img={item.sprites.other["official-artwork"].front_default} types={item.types} />
                            }))
                        }

                    </div>
                </div>
            </section>







        </>


    )
}
