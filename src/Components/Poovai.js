import React from 'react'
import leaf from './leaf.png'


const Poovai = () => {
  return (
    <div>
        <div className="poovai">
        
    
        
        <div className="poovai-info">
            <div className='image'>
                <h1>Junior Software Developer</h1>
            </div>
            
            <div className="poovai-content">
            <h2>Hello!!! I am Poovai, a Software Engineering student at PerScholas,Pittsburgh. Iam learning different front-end and back-end software technologies on my journey to become a Software Developer. 
                </h2>
                <h2>
            Skills: JS, HTML, CSS, React, Git, Github, Node, MongoDB, Mongoose
            </h2>
            
            <h2>My favourite meal is a full-blown South Indian Meals on a "banana leaf"</h2>
            <img className="leaf" src={leaf} alt="food"/>
            


            </div>
            
            

        </div>
        
        


        </div>
       

        </div>
    
    
  )
}

export default Poovai
