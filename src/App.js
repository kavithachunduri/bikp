
import React from 'react';
import './App.css';
import {Route, Routes, NavLink } from 'react-router-dom';
import Bezawit from './Components/Bezawit';
import Poovai from './Components/Poovai'
import Home from './Components/Home'
import Imane from './Components/Imane'






function App() {
  return (
    <div className="App">

         
          <nav>

            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/poovai"}>Poovai</NavLink>
            <NavLink to={"/bezawit"}>Bezawit</NavLink>
          
          </nav>
          
          
          <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/poovai" element={<Poovai/>}/>
          <Route path="/bezawit" element={<Bezawit/>}/>
          
          </Routes>

      


 

     



    </div>
  );
}

  

export default App
  
