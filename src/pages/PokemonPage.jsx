//pokemon detallado

import { useContext, useState } from "react"
import { PokemonContext } from "../context/PokemonContext"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Stats, Types } from "../components";


export const PokemonPage = () => {
    const [pokemonDetail, setPokemonDetails] = useState();
    const { getPokemonById } = useContext(PokemonContext);

    const { id } = useParams();
    const getPokemonDetails = async (id) => {
        const data = await getPokemonById(id); //destructurar solo la informacion necesaria
        debugger
        setPokemonDetails(data);

    }


    useEffect(() => {
        getPokemonDetails(id);
    }, []);


    return (
        <>



            <div class=" mx-auto max-w-sm rounded-lg shadow bg-gray-800 border-gray-700">
                <img className="rounded-t-lg"
                    src={pokemonDetail?.sprites.other["official-artwork"].front_default}
                    alt={`pokemonDetail ${pokemonDetail?.name}`}
                />

                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">{pokemonDetail?.name}</h5>
                    <div className="flex justify-center">
                        {
                            pokemonDetail?.types.map((item) => {
                                return <Types key={item.slot} type={item.type.name} />
                            })
                        }
                    </div>
                    <div className="flex flex-col flex-nowrap">
                        {
                            pokemonDetail?.stats.map(item => {
                                return <Stats key={item.stat.name} base={item.base_stat} name={item.stat.name} />
                            })
                        }
                    </div>
                    {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}

                </div>
            </div>
        </>
    )
}
