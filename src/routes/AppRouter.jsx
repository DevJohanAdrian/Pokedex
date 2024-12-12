import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { PokemonPage } from "../pages/PokemonPage"

export const AppRouter = () => {
  return (
    <Routes>
		
				<Route index element={<HomePage />} />
     
				<Route path='pokemon/:id' element={<PokemonPage />} />
	
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}
