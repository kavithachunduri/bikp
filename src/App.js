
import './App.css';
import {Route, Routes, NavLink } from 'react-router-dom';
import Home from './Component/Home';
import Bezawit from './Component/Bezawit';


import {NavLink,Routes,Route} from 'react-router-dom';
//import Bezawit from './Components/Bezawit'
//import Kavitha from './Components/Kavitha'
import Poovai from './Components/Poovai'
import Home from './Components/Home'



import Imane from '../Components/Imane'



function App() {
  return (
    <div className="App">

         
          <nav>

            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/poovai"}>Poovai</NavLink>
          
          </nav>
          
          
          <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/poovai" element={<Poovai/>}/>
          
          </Routes>

      


 

     



    </div>
  );
}

  

export default App
  
