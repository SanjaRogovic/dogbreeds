import React from 'react'
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import * as ReactBootstrap from "react-bootstrap";


const Start = () => {
//   const [breeds, setBreeds] = useState([]);
//   const [loading, setLoading] = useState(false);

  
//   const getDogs = async () => {
//     try{
//       setLoading(true);
//       const url = "http://localhost:3000/api/dogs"
//       const response = await fetch(url)
//       setBreeds(await response.json());
//     }
//     catch (error){
//       console.error
//     }
//     finally {
//       setLoading(false)
//     }
//   };

//   console.log(breeds);
  
//   useEffect(() => {
//     getDogs();
//   }, []);

  return (
    <div className="all">
      <div>
      <Button className="loginButton" variant="warning">
      <Link className='link2' to={`/dogbreeds/login`}> LOGIN </Link>  
      </Button>
      </div>

      <div>
      <Button className="registerButton" variant="warning">
      <Link className='link2' to={`/dogbreeds/register`}> REGISTER </Link>  
      </Button>
      </div>
    <div className="headerBckgrnd">
    <h1 className='header'>Dog Breeds</h1>
    <hr className='line'/>
    </div>
    </div>
  )
}

export default Start




