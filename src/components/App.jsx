import React from "react"
import "./index.css"
import people from "../data.js"
import {useState}  from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
 

 const App = () => {
  
    const [value, setValue] = useState(0)  

    const{name, title, quote, image}  = people[value]

    // the order will be img, name, title and quote , they will all be in one container
    // there will be be two:  left and right arrow on side of the div - person

  // creating  onclick event handler for  the left and right arrow 

 const update_value = (state, type) => {
    if(type === "increase") {
        if(value >= people.length-1) {
            setValue(0)
        } else{
            setValue(value+1)
        }
    }

    if(type === "decrease") {
      if(value <= 0) {
          setValue(people.length-1)
      } else{
          setValue(value-1)
      }
  }
}





     return (

         <>
         <section className = "container">
             <div className = "left-arrow" onClick = {() =>update_value(value, "decrease")}>
               Deccrease  <FiChevronLeft />
              
             </div>
             <div className = "person" > 
             <img src = {image}/>
             <h3>{name}</h3>
             <h4>{title}</h4>
             <p>{quote}</p>
             
             </div>
             <div className = "right-arrow" onClick = {() =>update_value(value, "increase")} >
                 Increase: <FiChevronRight />
             </div>
             
             </section>     
           
         </>
     )

 }

 export default App;
