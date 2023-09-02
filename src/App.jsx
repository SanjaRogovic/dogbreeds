import './App.css'
import { Routes, Route } from 'react-router-dom'
import DogList from "./components/DogList"
import Display from './components/Display'
import useContentful from './components/useContentful'
import {useState, useEffect} from "react"

function App() {
  const [breeds, setBreeds] = useState([])
  const {getDogs} = useContentful()

  useEffect(()=>{
    getDogs().then((response)=> console.log(response))
    
  })

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
