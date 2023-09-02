import React from 'react'
import { useState, useEffect } from "react";
import * as contentful from "contentful";
import { Link } from 'react-router-dom'

const Homepage = () => {
    const [breeds, setBreeds] = useState([]);



    const getDogs = async () => {
        const client = contentful.createClient({
          space: "y5d9wlvfzf96",
          accessToken: "oy4sUQfFIhCEhDjJJarewqCr9d5lSi9PiooSKDPAP0U",
        });
    
        const response = await client.getEntries()
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
      <Link key={index} to={`/doglist/${breeds.sys.id}`}>
      {breeds.fields.breedName}<br/></Link>)  
    })    
  }

  </>
  )
}

export default Homepage




