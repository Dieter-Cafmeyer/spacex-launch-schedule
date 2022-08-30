import React from 'react'
import { Link } from 'react-router-dom';

const PastLaunches = ({ pastLaunches }) => {

   pastLaunches.forEach(launch => {
      let datum = new Date(launch.date_utc);
      launch.datum = datum.getDate() + '-' + (datum.getMonth() + 1) + '-' + datum.getFullYear();
   });

   return (
      <div>
         {pastLaunches.map((launch) => (
            <div key={launch.id} className='upcoming_launch'>
               <img src={launch.links.patch.small} />

               <div>
                  <h3>{launch.datum}</h3>
                  <h2>{launch.name}</h2>
               </div>
            </div>
         ))}

         <Link to={`/past`}>All past launches</Link>
      </div>
   )
}

export default PastLaunches
