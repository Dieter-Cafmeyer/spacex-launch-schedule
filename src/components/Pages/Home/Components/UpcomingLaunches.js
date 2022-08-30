import React from 'react'

const UpcomingLaunches = ({ nextLaunches }) => {

   return (
      <div>
         {nextLaunches.map((launch) => (
            <div key={launch.id} className='upcoming_launch'>
               <img src={launch.links.patch.small} />

               <div>
                  <h2>{launch.name}</h2>
               </div>
            </div>
         ))}
      </div>
   )
}

export default UpcomingLaunches
