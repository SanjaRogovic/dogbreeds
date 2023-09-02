import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import * as contentful from "contentful";
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';

const DogList = (props) => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [about, setAbout] = useState("");
  const [ratingSport, setRatingSport] = useState()
  const [affectionLevel, setAffectionLevel] = useState()

  const { index } = useParams();
  console.log(index);

  const dogFetch = async () => {
    const client = contentful.createClient({
      space: "y5d9wlvfzf96",
      accessToken: "oy4sUQfFIhCEhDjJJarewqCr9d5lSi9PiooSKDPAP0U",
    });

    const response = await client.getEntry(index);
    console.log(response);
    setName(response.fields.breedName);
    setImg(response.fields.dogImg[1].fields.file.url);
    setAbout(response.fields.dogAbout);
    setRatingSport(response.fields.sportNeed)
    setAffectionLevel(response.fields.affectionateLevel)
  };

  useEffect(() => {
    dogFetch();
  }, []);

  return (
    <div>
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src={img} style={{ height: "250px" }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {about} <br />
            <br />
            Sport Need:
            <Rating name="read-only" value={`${ratingSport}`} readOnly /> <br />
            Affectionate Level:
            <Rating name="read-only2" value={`${affectionLevel}`} readOnly />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DogList

