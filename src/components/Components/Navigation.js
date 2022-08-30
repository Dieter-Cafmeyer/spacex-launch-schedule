import { Link } from 'react-router-dom'

//import logo from '../../assets/images/logo.svg';

const Navigation = ({ showMenu, closeButton }) => {

   return (
      <section className={showMenu ? 'active navigatie' : 'navigatie'}>
         <div className="navigatie_top">
            <i onClick={closeButton} className="fal fa-times"></i>
         </div>

         <div className="settings">
            <Link to="/" onClick={closeButton}><i className="fad fa-telescope"></i> Explore</Link>
            <Link to="/upcoming" onClick={closeButton}><i className="fad fa-calendar-clock"></i> Upcoming Launches</Link>
            <Link to="/past" onClick={closeButton}><i className="fad fa-clock-rotate-left"></i> Past Launches</Link>
            <Link to="/rockets" onClick={closeButton}><i className="fad fa-rocket-launch"></i> Rockets</Link>
         </div>
      </section>
   )
}

export default Navigation
