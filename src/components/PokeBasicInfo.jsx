import { Link } from "react-router-dom"
import { Types } from "./Types"

export const PokeBasicInfo = ({ id, pokemonName, img, types }) => {

  


    return (
        <Link to={`/pokemon/${id}`} className="p-4 xl:w-1/4 md:w-1/2">
            {/* <div > */}
                <div className="p-6 bg-gray-800 rounded-lg bg-opacity-40">
                    <img className="object-cover object-center w-full h-auto mb-6 rounded" src={img} alt={`Pokemon ${pokemonName}`} />
                    <p className='text-center'>N° {id}</p>
                    <h3 className="text-lg font-medium tracking-widest text-center text-indigo-400 title-font">{pokemonName}</h3>
                    {/* {JSON.stringify(types[0].type.name)} */}
                    <div className="flex justify-center">
                    {
                            types.map((item)=>{
                                return <Types key={item.slot} type={item.type.name}/>
                            })
                        }
                    </div>
                   
                    
                    {/* <p className="text-base leading-relaxed">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p> */}
                </div>
            {/* </div> */}
    
        </Link>
    )
}
