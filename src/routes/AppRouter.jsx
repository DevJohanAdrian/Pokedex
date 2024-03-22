import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { PokemonPage } from "../pages/PokemonPage"

export const AppRouter = () => {
  return (
    <Routes>
			{/* <Route path='/' element={<Navigation />}> */}
				<Route index element={<HomePage />} />
        {/* <Route path='home' element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />}/> */}
				<Route path='pokemon/:id' element={<PokemonPage />} />
				{/* <Route path='search' element={<SearchPage />} /> */}
			{/* </Route> */}

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}
