import "./App.css";
import { Routes, Route, Link } from 'react-router-dom'
import DogList from "./components/DogList"
// import Display from './components/Display'
// import Contentful from './components/Contentful'
import { useState, useEffect } from "react";
import * as contentful from "contentful";

function App() {
  const [breeds, setBreeds] = useState([]);

  const getDogs = async () => {
    const client = contentful.createClient({
      space: "y5d9wlvfzf96",
      accessToken: "oy4sUQfFIhCEhDjJJarewqCr9d5lSi9PiooSKDPAP0U",
    });

    const response = await client.getEntries()
    // console.log(response)
    setBreeds(response.items)
  }

    
  useEffect( () => {
    getDogs()
    }, []);

    console.log(breeds)

  return (
    <>
      <h1>Dog Breeds</h1>

      {breeds.map((breeds, index)=> { return ( 
        <Link key={index} to={`/doglist/${index}`}>
        {breeds.fields.breedName}</Link>)  
      })    
    }
     {/* <img src={breeds.fields.dogImg[0].file} alt="some dog"/> */}

     <Routes>
        <Route path="/doglist/:index" element={<DogList/>}/>
      </Routes>
    </>
  );
}

export default App;
