import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register/Register'
import InFo from  './pages/InFo/InFo'
import Movies from './pages/Movies/Movies'
import ShowCase from './pages/ShowCase/ShowCase'
function App() {
  return(
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path='/info' element={<InFo/>}/>
      <Route path='/movie' element={<Movies/>}/>
      <Route path='/showcase' element={<ShowCase/>}/>
      <Route path='*' element={<h1>404 page not found</h1>}/>
    </Routes>
  )
}

export default App
