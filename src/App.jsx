import Home from './components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SearchProvider } from './context/SearchContext'
// import GenreDetails from './components/Details/GenreDetails'

const App = () => {
  return (
    <>
      <Home />
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            {/* <Route path='/genre/:id' element={<GenreDetails/>}></Route> */}
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </>
  )
}

export default App
