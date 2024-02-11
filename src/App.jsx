import Main from './component/Main'
import HomePage from './component/Home'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NotFound from './component/NotFound'
import Game from './component/Game'
// TODO CREATE SCORE FROM LOCALSTORAGE
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
        <Route index element={<Main/>}></Route>
        <Route path='/home' element={<HomePage name="Example"/>}></Route>
        <Route path='/tic-tac-toe' element={<Game/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
