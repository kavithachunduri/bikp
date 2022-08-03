
import React from 'react';
import './App.css';
import {Route, Routes, NavLink } from 'react-router-dom';
import Bezawit from './Components/Bezawit';
import Poovai from './Components/Poovai'
import Home from './Components/Home'
import Imane from './Components/Imane'
import {NavLink,Routes,Route} from 'react-router-dom';
import Kavitha from './Components/Kavitha';
import Home from './Components/Home'

function App() {
  return (
    <div className="App">

          <nav>
            <NavLink to={"/"} className="nav-links">Home</NavLink>
           
            <NavLink to={"/kavitha"} className="nav-links">Kavitha</NavLink>
          </nav>

          <Routes>

          <Route path="/" element={<Home/>}/>
        
          <Route path="/kavitha" element={<Kavitha/>}/>
          </Routes>

    </div>
  );
}
export default App

  


