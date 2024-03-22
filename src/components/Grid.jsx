import { useContext, useEffect, useState } from "react";
// import { useFetchPokemon } from "../hooks/useFetchPokemon";
import { PokeBasicInfo } from "./PokeBasicInfo";
import { PokemonContext } from "../context/PokemonContext";

export const Grid = () => {
    // const [pokeList, setPokeList] = useState([]);
    // const { data, error, hasError, isLoading } = useFetchPokemon();

    const {pokemonsList, loading}= useContext(PokemonContext);

    

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
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="w-full mb-6 lg:w-1/2 lg:mb-0">
                            <h1 className="mb-2 text-2xl font-medium text-white sm:text-3xl title-font">Pitchfork Kickstarter Taxidermy</h1>
                            <div className="w-20 h-1 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="w-full leading-relaxed text-gray-400 lg:w-1/2 text-opacity-90">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {
                            pokemonsList?.map((item) => {
                                return <PokeBasicInfo key={item.id}
                                 id={item.id}   pokemonName={item.name} img={item.sprites.other["official-artwork"].front_default} />
                            })
                        }

                    </div>
                </div>
            </section>







        </>


    )
}
