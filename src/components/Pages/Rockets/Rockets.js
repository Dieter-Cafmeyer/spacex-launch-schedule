import { useState, useEffect } from 'react';
import RocketItems from './Components/RocketItems';

const Rockets = ({ onShowMenu }) => {
   const [rockets, setRockets] = useState([]);

   useEffect(() => {
      const getAllRockets = async () => {
         const data = await getRockets();
         setRockets(data);
      }
      getAllRockets();
   }, []);

   const getRockets = async () => {
      const response = await fetch(`https://api.spacexdata.com/v4/rockets`);
      const data = await response.json();
      return data;
   }

   return (
      <div className='scrollPage'>
         <section className='navbar'>
            <h1>Rockets</h1>
            <i onClick={onShowMenu} className="fal fa-bars"></i>
         </section>

         <div className='rockets'>
            <RocketItems rockets={rockets} />
         </div>
      </div>
   )
}

export default Rockets
