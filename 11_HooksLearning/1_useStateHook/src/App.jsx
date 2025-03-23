import { useState } from 'react';
import './App.css'

function App(){

  //useState Hook (for single state)-->
  let [color,setColor] = useState("Black")

  let changeColor = ()=>{
    setColor("Red")
  }



  //useState Hook (for multiple state)-->
  let [car, setCar] = useState({
    brand: "Ferrari",
    color: "Red",
    model: "Roma",
    year: "2023"
  }) 

  let changeYear = ()=>{
    setCar((car)=>{ 
      return {...car,year: "2024"}
    });
  }
  


  //useState hook (changing state based on previous state)-->
  let [counter,setCounter] = useState(0)

  let changeCount = ()=>{

    //want to increment by 4 (but we does'nt getting previous state)-->
    // setCounter(counter+1) //1
    // setCounter(counter+1) //1
    // setCounter(counter+1) //1
    // setCounter(counter+1) //1


    //getting previous state
    setCounter((counter)=>{return counter+1})
    setCounter((counter)=>{return counter+1})
    setCounter((counter)=>{return counter+1})
    setCounter((counter)=>{return counter+1})

  }



  return(
    <>
      
      {/* (for single state -->) */}
      <h1>My favourite color is {color}!</h1>
      <button onClick={changeColor}>Red</button><br /><br />


      {/* (for multiple state -->) */}
      <h1>My {car.brand}</h1>
      <p>It is a {car.color} {car.model} from {car.year}</p>
      <button onClick={changeYear}>Year</button><br /><br />


      {/* (based on previous state -->) */}
      <h1>Count : {counter}</h1>
      <button onClick={changeCount}>increment by 4</button>
    
    </>
  )
}

export default App;