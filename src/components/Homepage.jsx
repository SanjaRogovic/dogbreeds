import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";

const Homepage = () => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState()

  const getDogs = async () => {
    try {
      setLoading(true);
      const url = "http://localhost:3000/api/dogs";
      const response = await fetch(url);
      setBreeds(await response.json());
    } catch (error) {
      console.error;
    } finally {
      setLoading(false);
    }
  };

  console.log(breeds);

  useEffect(() => {
    getDogs();
  }, []);

  return (
    <div className="all">
      <div className="headerBckgrnd">
        <h1 className="header">Dog Breeds</h1>
        <hr className="line" />
      </div>
      {loading ? (
        <div>
          <ReactBootstrap.Spinner animation="border" variant="light" />
          <p className="paragraphContent">Content loading ...</p>
        </div>
      ) : null}
      <div className="cardContainer">
        {breeds.map((breeds, index) => {
          return (
            <Card className="card" key={index}>
              <Link className="link" key={index} to={`/doglist/${breeds._id}`}>
                <Card.Body>
                  <Card.Title>{breeds.breedName} </Card.Title>
                  <Card.Img
                    variant="bottom"
                    className="cardImg"
                    src={breeds.dogImg}
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

export default Homepage;
