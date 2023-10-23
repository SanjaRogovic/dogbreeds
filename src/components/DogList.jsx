import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

import * as ReactBootstrap from "react-bootstrap";

const DogList = (props) => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [about, setAbout] = useState("");
  const [ratingSport, setRatingSport] = useState(0);
  const [affectionLevel, setAffectionLevel] = useState(0);
  const [loading, setLoading] = useState(false);

  const { index } = useParams();

  const dogFetch = async () => {
    try {
      setLoading(true);
      const url = `http://localhost:3000/api/dogs/id/${index}`;
      const response = await fetch(url);
      const oneDog = await response.json();

      setLoading(true);
      setName(oneDog.breedName);
      setImg(oneDog.dogImg);
      setAbout(oneDog.dogAbout);
      setRatingSport(oneDog.sportNeed);
      setAffectionLevel(oneDog.affectionateLevel);
    } catch (error) {
      console.error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dogFetch();
  }, [index]);

  return (
    <div>
      <div className="buttonContainer">
        <Button className="homebutton" variant="warning">
          <Link className="link2" key={index} to={`/dogbreeds/homepage`}>
            {" "}
            ← BACK TO HOMEPAGE{" "}
          </Link>
        </Button>
      </div>

      {loading ? (
        <div>
          <ReactBootstrap.Spinner animation="border" variant="light" />
          <p className="paragraphContent">Content loading ...</p>
        </div>
      ) : null}

      <Card className="dogCard">
        <Card.Img className="dogImage" variant="top" src={img} />
        <Card.Body className="cardBody">
          <Card.Title className="cardTitle">{name}</Card.Title>
          <Card.Text className="about">
            {about}
            <br />
            <br />
            <div className="rating">
              Sport Need:
              <Rating name="read-only" value={ratingSport} readOnly />
              <br />
              Affectionate Level:
              <Rating name="read-only2" value={affectionLevel} readOnly />
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DogList;
