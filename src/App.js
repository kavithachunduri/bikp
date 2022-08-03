
import React from 'react';
import './App.css';
import {Route, Routes, NavLink } from 'react-router-dom';
import Bezawit from './Components/Bezawit';
import Poovai from './Components/Poovai'
import Home from './Components/Home'
import Imane from './Components/Imane'
import Kavitha from './Components/Kavitha';


function App() {
  return (
    <div className="App">

          <nav>
            <NavLink to={"/"} className="nav-links">Home</NavLink>
            <NavLink to={"/poovai"} className="nav-links">Poovai</NavLink>
            <NavLink to={"/bezawit"} className="nav-links">Bezawit</NavLink>
            <NavLink to={"/imane"} className="nav-links">Imane</NavLink>
            <NavLink to={"/kavitha"} className="nav-links">Kavitha</NavLink>
          </nav>

          <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/kavitha" element={<Kavitha/>}/>
          <Route path="/poovai" element={<Poovai/>}/>
          <Route path="/imane" element={<Imane/>}/>
          <Route path="/bezawit" element={<Bezawit/>}/>
          </Routes>

    </div>
  );
}
export default App

  


