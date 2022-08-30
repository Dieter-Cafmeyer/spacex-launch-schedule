import React from 'react'

const Rocket = ({ rocket }) => {
   return (
      <article className='rocket'>
         <img src={rocket.flickr_images[0]} />
         <div>
            <h2>{rocket.name}</h2>
            <p>{rocket.description.substring(0,130)}...</p>
         </div>
      </article>
   )
}

export default Rocket
