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
    try{
      setLoading(true);
      const client = contentful.createClient({
        space: "y5d9wlvfzf96",
        accessToken: "oy4sUQfFIhCEhDjJJarewqCr9d5lSi9PiooSKDPAP0U",
      });
      const response = await client.getEntries(); 
      setBreeds(response.items);
    }
    catch (error){
      console.error
    }
    finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getDogs();
  }, []);
  // console.log(breeds)

  return (
    <div className="all">
    <div className="headerBckgrnd">
      {/* <img className='dogBreedsHeader' src="https://i.postimg.cc/Sxc45VCp/head.png" alt="Header" style={{width:"90%"}}/> */}
    <h1 className='header'>Dog Breeds</h1>
    <hr className='line'/>
    </div>
      {loading ? (
        <div>
          <ReactBootstrap.Spinner animation="border" variant="light" />
          <p className='paragraphContent'>Content loading ...</p>
        </div>
      ) : null}
      <div className="cardContainer">
        {breeds.map((breeds, index) => {
          return (
            <Card className="card" key={index}>

            <Link className='link' key={index} to={`/doglist/${breeds.sys.id}`}>    
              <Card.Body>

              <Card.Title >
                  
                    {breeds.fields.breedName}
                   
                </Card.Title>
                <Card.Img
                  variant="bottom"
                  className="cardImg"
                  src={breeds.fields.dogImg[0].fields.file.url}
                />
              </Card.Body>
              
                    
                   
              </Link>


                
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage




