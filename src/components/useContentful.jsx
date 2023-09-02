import React from 'react'
import {createClient} from "contentful"

const useContentful = () => {

    const client = createClient = () => {
        space: "",
        accessToken: "",
        host: ""
    }

    const getDogs = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "",  //dogs
                select: "fields",
                order: "fields.name" //dog breeds sorted by name
            })

            const mappedEntries = entries.......map((item) => {
                const image = //dog breed image or avatar,
                
                return {
                    ...item.fields //return name or some description, depending what is fetched from an object(getting from console.log(response))
                    image
                }
            })

            return entries  //once we map the items from response then we return mappedEntries instead of entries - with this in console we can see our array of dog breeds objects only 
        }
        catch(error){
            console.log(`Error fetching data ${error}`)
        }
    }

  return (
    <div>{getDogs}</div>
  )
}

export default useContentful