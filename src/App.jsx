import './App.css'
import { Routes, Route } from 'react-router-dom'
import DogList from "./components/DogList"
import Display from './components/Display'

function App() {

  return (
    <>
    <div>Dog Breeds</div>
    <Routes>
      <Route path='/display/:id' element={<Display />} />  //displaying dog by id ?
      <Route path='/doglist/:name' element={<DogList />} /> //displaying dog breeds by category/ name ?
    </Routes>
    </>
  )
}

export default App
