// Assets & Utils
import './styles/index.css';

// Components & Pages
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from 'react-router-dom';

import Navigation from './components/Components/Navigation';
import Home from './components/Pages/Home/Home';
import Past from './components/Pages/Past/Past';
import Rockets from './components/Pages/Rockets/Rockets';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Router>
      <Navigation showMenu={showMenu} closeButton={() => setShowMenu(!showMenu)} />
      <main>
        <Routes>
          <Route path='/' element={<Home onShowMenu={() => setShowMenu(!showMenu)}/>} />
          <Route path='/past' element={<Past onShowMenu={() => setShowMenu(!showMenu)} />} />
          <Route path='/rockets' element={<Rockets onShowMenu={() => setShowMenu(!showMenu)} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;