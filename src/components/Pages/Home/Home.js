import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import UpcomingLaunches from './Components/UpcomingLaunches';
import PastLaunches from './Components/PastLaunches';
import Switch from './Components/Switch';

const Home = ({ onShowMenu }) => {
   const [nextLaunches, setNextLaunches] = useState([]);
   const [pastLaunches, setPastLaunches] = useState([]);
   const [tab, setTabShown] = useState('upcoming');

   let content;

   useEffect(() => {
      if (tab === 'upcoming') {
         const getLaunches = async () => {
            const data = await getNextLaunches();
            setNextLaunches(data);
         }
         getLaunches();
      } else if (tab === 'past') {
         const getLaunches = async () => {
            const data = await getPastLaunches();
            setPastLaunches(data.docs);
         }
         getLaunches();
      }
   }, [tab]);

   const getNextLaunches = async () => {
      const response = await fetch(`https://api.spacexdata.com/v4/launches/upcoming`);
      const data = await response.json();
      return data;
   }

   const getPastLaunches = async () => {
      let body = {
         "query": {
            "upcoming": false
         },
         "options": {
            "limit": 5,
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

   const showTab = (e, item) => {
      setTabShown(item);
   }

   if (tab === "upcoming") {
      if (nextLaunches.length > 0) {
         content = <UpcomingLaunches key='next' nextLaunches={nextLaunches} />
      }
   } else if (tab === "past") {
      if (pastLaunches.length > 0) {
         content = <PastLaunches key='past' pastLaunches={pastLaunches} />
      }
   }

   return (
      <>
         <section className='navbar'>
            <h1>Explore</h1>
            <i onClick={onShowMenu} className="fal fa-bars"></i>
         </section>

         <Switch tab={tab} onShowTab={showTab} />

         <section className='home_content'>
            {content}
         </section>
      </>
   )
}

export default Home
