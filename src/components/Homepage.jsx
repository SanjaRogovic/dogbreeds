import React from 'react'
import { useState, useEffect } from "react";
import * as contentful from "contentful";
import { Link } from 'react-router-dom'
import Card  from 'react-bootstrap/Card'



const Homepage = () => {
    const [breeds, setBreeds] = useState([]);

    const space = import.meta.env.VITE_SOME_SPACE;
    const accessToken = import.meta.env.VITE_SOME_TOKEN;


    const getDogs = async () => {
        const client = contentful.createClient({
          space: space,
          accessToken: accessToken,
        });
    
        const response = await client.getEntries()
        setBreeds(response.items)
      }
        
      useEffect( () => {
        getDogs()
        }, []);
        // console.log(breeds)

  return (
    <>
      <h1>Dog Breeds</h1>
<div className='cardContainer'> 
      {breeds.map((breeds, index) => {
        return (
          <Card style={{ width: "18rem" }} key={index}>
            <Card.Body>
              <Card.Title>
              <Link key={index} to={`/doglist/${breeds.sys.id}`}>
              {breeds.fields.breedName}<br />
              </Link>
              </Card.Title>
             
              <Card.Img
              variant="bottom" className='cardImg'
              src={breeds.fields.dogImg[0].fields.file.url}
            />
              
            </Card.Body>
          </Card>
        );
      })}

</div>
    </>
  );
}

export default Homepage




