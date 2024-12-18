import { useContext, useEffect } from "react";
import { useState } from "react"
import { PokemonContext } from "../context/PokemonContext";

export const SearchPokemon = ({ onNewPokemon }) => {

  const [inputValue, setInputValue] = useState('');
  const [types, setTypes] = useState();
  const { getPokemonTypes, filterPokemonByType } = useContext(PokemonContext);

  const getPokemonsTypes = async () => {
    const data = await getPokemonTypes(); //destructurar solo la informacion necesaria
    setTypes(data);

  }


  useEffect(() => {
    getPokemonsTypes();
  }, [])


  const filtrar = (type)=>{
    filterPokemonByType(type);
  }


  // const onChangeInput = ( value )=>{
  //   console.log(value.target.value)
  // }

  const onChangeInput = ({ target }) => {
    setInputValue(target.value);
    // console.log(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    setInputValue('');
    onNewPokemon(inputValue.trim());
  }


  return (

    <form className="max-w-4xl mx-auto" onSubmit={onSubmit}  >
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input type="search" id="input-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Pokemon" required value={inputValue} onChange={onChangeInput} />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </div>

      <div>
        <button className={`ice`} onClick={() => filtrar("all")}>mostrar todos</button>
      </div>
      <div className="">

        {JSON.stringify(types)}
        {
          types?.map((type) => {
              return <button className={`text-white  hover:bg-gradient-to-br focus:ring-4 focus:outline-none shadow-lg  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ${type.name}`} key={type.name} onClick={()=> filtrar(type.name)}>
                {type.name}
              </button>
          })
        }
      </div>
    </form>

  )
}
