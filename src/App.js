
import './App.css';
import {Route, Routes, NavLink } from 'react-router-dom';
import Home from './Component/Home';
import Bezawit from './Component/Bezawit';


function App() {
  return(
    
<div className="App">
     
       <nav>
              <NavLink to={"/"} className="nav-links">Home</NavLink>
             
             <NavLink to={"/Bezawit"} className="nav-links">Bezawit</NavLink>
            
        </nav>

         <Routes>

             <Route path='/' element={<Home />} />
             <Route path='Bezawit' element={<Bezawit />}/>
             {/* <Route path='*' element={<NoMatch />}/> */}

         </Routes>
     </div>
 )
}

  

export default App
  
