import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import * as contentful from "contentful";


const DogList = (props) => {
const [name, setName] = useState("")
const [img, setImg] = useState("")
const [about, setAbout] = useState("")


const {index} = useParams();
console.log(index)

  

  const dogFetch = async () => {
    const client = contentful.createClient({
      space: "y5d9wlvfzf96",
      accessToken: "oy4sUQfFIhCEhDjJJarewqCr9d5lSi9PiooSKDPAP0U",
    });

    


  const response = await client.getEntry(index)
  console.log(response)
        setName(response.fields.breedName)
        setImg(response.fields.dogImg[1].fields.file.url)
        setAbout(response.fields.dogAbout)

  }

  useEffect( () => {
    dogFetch()
  
    }, []);




  return (

    <div>
      <p>{name}</p>
     <img src={img} style={{height: "200px"}}/>
      <p>{about}</p>

      
       
    </div>
  )
}

export default DogList

