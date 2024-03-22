//pokemon detallado

import { useContext, useState } from "react"
import { PokemonContext } from "../context/PokemonContext"
import { useParams } from "react-router-dom";
import { useEffect } from "react";


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
            <div className='header-main-pokemonDetail?'>
                <span className='number-pokemonDetail?'>#{pokemonDetail?.id}</span>
                <div className='container-img-pokemonDetail?'>
                    <img
                        src={pokemonDetail?.sprites.other.dream_world.front_default}
                        alt={`pokemonDetail? ${pokemonDetail?.name}`}
                    />
                </div>

                <div className='container-info-pokemonDetail?'>
                    {/* <h1>{primerMayuscula(pokemonDetail?.name)}</h1> */}
                    <div className='card-types info-pokemonDetail?-type'>
                        {pokemonDetail?.types.map(type => (
                            <span key={type.type.name} className={`${type.type.name}`}>
                                {type.type.name}
                            </span>
                        ))}
                    </div>
                    <div className='info-pokemonDetail?'>
                        <div className='group-info'>
                            <p>Altura</p>
                            <span>{pokemonDetail?.height}</span>
                        </div>
                        <div className='group-info'>
                            <p>Peso</p>
                            <span>{pokemonDetail?.weight}KG</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-stats'>
                <h1>Estadísticas</h1>
                <div className='stats'>
                    <div className='stat-group'>
                        <span>Hp</span>
                        <div className='progress-bar'></div>
                        <span className='counter-stat'>
                            {pokemonDetail?.stats[0].base_stat}
                        </span>
                    </div>
                    <div className='stat-group'>
                        <span>Attack</span>
                        <div className='progress-bar'></div>
                        <span className='counter-stat'>
                            {pokemonDetail?.stats[1].base_stat}
                        </span>
                    </div>
                    <div className='stat-group'>
                        <span>Defense</span>
                        <div className='progress-bar'></div>
                        <span className='counter-stat'>
                            {pokemonDetail?.stats[2].base_stat}
                        </span>
                    </div>
                    <div className='stat-group'>
                        <span>Special Attack</span>
                        <div className='progress-bar'></div>
                        <span className='counter-stat'>
                            {pokemonDetail?.stats[3].base_stat}
                        </span>
                    </div>
                    <div className='stat-group'>
                        <span>Special Defense</span>
                        <div className='progress-bar'></div>
                        <span className='counter-stat'>
                            {pokemonDetail?.stats[4].base_stat}
                        </span>
                    </div>
                    <div className='stat-group'>
                        <span>Speed</span>
                        <div className='progress-bar'></div>
                        <span className='counter-stat'>
                            {pokemonDetail?.stats[5].base_stat}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
