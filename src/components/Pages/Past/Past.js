import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PastLaunches from './Components/PastLaunches';

const Past = ({ onShowMenu }) => {
   const [pastLaunches, setPastLaunches] = useState([]);
   let offset = 0;
   let loading = false;

   useEffect(() => {
      const getLaunches = async () => {
         const data = await getPastLaunches();
         setPastLaunches(data.docs);
      }
      getLaunches();
   }, []);

   const handleScroll = () => {
      const loadmore = document.getElementById('loadmore')
      let distance = window.pageYOffset + loadmore.getBoundingClientRect().top - document.body.clientHeight

      if (distance < 200 && loading === false) {
         loading = true;
         const getLaunches = async () => {
            const data = await getPastLaunches();
            const children = pastLaunches.concat(data.docs);
            setPastLaunches(children);
         }
         getLaunches();
      }
   };

   const getPastLaunches = async () => {
      offset = document.querySelectorAll('.upcoming_launch').length;
      let body = {
         "query": {
            "upcoming": false
         },
         "options": {
            "limit": 20,
            "offset": offset,
            "sort": {
               "date_utc": "desc"
            }
         }
      }
      const response = await fetch(`https://api.spacexdata.com/v5/launches/query`, {
         method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(body)
      });

      const data = await response.json();
      return data;
   }

   return (
      <div className='scrollPage' onScroll={handleScroll}>
         <section className='navbar'>
            <h1>Past Launches</h1>
            <i onClick={onShowMenu} className="fal fa-bars"></i>
         </section>

         <section className='home_content'>
            <PastLaunches key='past' pastLaunches={pastLaunches} />
         </section>
         <div id='loadmore'></div>
      </div>
   )
}

export default Past
