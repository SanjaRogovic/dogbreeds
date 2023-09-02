import React from 'react'
import { useState, useEffect } from "react";
import * as contentful from "contentful";
import { Link } from 'react-router-dom'
import Card  from 'react-bootstrap/Card'



const Homepage = () => {
    const [breeds, setBreeds] = useState([]);
    const [img, setImg] = useState("");


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
              {/* <Button variant="primary">Read more...</Button> */}
            </Card.Body>
          </Card>
        );
      })}

</div>
    </>
  );
}

export default Homepage




