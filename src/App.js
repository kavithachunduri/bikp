import React from 'react';
import './App.css';
import {NavLink, Routes,Route} from 'react-router-dom';
import Imane from './Components/Imane'
import Welcome from './page/Welcome'

function App() {
  return (
    <div className="App">
          <nav>
            <NavLink to={"/"}className='nav-links'>Home</NavLink>
            <NavLink to={"/imane"} className="nav-links">Imane</NavLink>
          </nav>
         
           
          <Routes>
          <Route path="/" element={<Welcome></Welcome>}></Route>
          <Route path="/imane" element={<Imane/>}/>
          
          
          </Routes>
          </div>
    
    
    // </div>
  );
}

export default App;