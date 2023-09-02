import React from 'react'
import { useParams } from 'react-router-dom'

const DogList = ({breeds}) => {

  const {index, breeds} = useParams();

  return (

    <div>
      {breeds.fields.breedName}
        {index}
    </div>
  )
}

export default DogList