import React from 'react'
import { useParams } from 'react-router-dom'

const Display = () => {

    const params = useParams()

  return (
    <div>Display {params.id}</div>
  )
}

export default Display