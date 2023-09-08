import React from 'react'
import { useState, useEffect } from "react";
import * as contentful from "contentful";
import Card  from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import * as ReactBootstrap from "react-bootstrap";




const Homepage = () => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(false);

  // const space = import.meta.env.VITE_SOME_SPACE;
  // const accessToken = import.meta.env.VITE_SOME_TOKEN;

  const getDogs = async () => {
    const client = contentful.createClient({
      space: "y5d9wlvfzf96",
      accessToken: "oy4sUQfFIhCEhDjJJarewqCr9d5lSi9PiooSKDPAP0U",
    });

    const response = await client.getEntries();
    setLoading(true);
    setBreeds(response.items);
    setLoading(false)
  };

  useEffect(() => {
    getDogs();
  }, []);
  // console.log(breeds)

  return (
    <>
      <h1 className='header'>Dog Breeds</h1>
      {loading && (
          <ReactBootstrap.Spinner animation="border" variant="secondary" />
        )}
      <div className="cardContainer">     
        {breeds.map((breeds, index) => {
          return (
            <Card className='card' key={index}>
              <Card.Body>
                <Card.Title>
                  <Link key={index} to={`/doglist/${breeds.sys.id}`}>
                    {breeds.fields.breedName}
                    <br />
                  </Link>
                </Card.Title>
                <Card.Img
                  variant="bottom"
                  className="cardImg"
                  src={breeds.fields.dogImg[0].fields.file.url}
                />
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Homepage




