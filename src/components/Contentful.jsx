import * as contentful from "contentful"
import React from "react"

const Contentful = ({breeds, setBreeds}) => {


    const client = contentful.createClient({
        space: 'y5d9wlvfzf96',
        accessToken: 'oy4sUQfFIhCEhDjJJarewqCr9d5lSi9PiooSKDPAP0U',
      });

    client.getEntries().then(function (entries) {
        // log the title for all the entries that have it
        entries.items.forEach(function (entry) {
          if (entry.fields) {
            setBreeds(entry.fields); 
            console.log(breeds)      
          }
        });
      });

    return (
      <div>
        
      </div>
    );
}


export default Contentful