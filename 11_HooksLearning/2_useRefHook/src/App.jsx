import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App(){

  //(understanding useRef hook that does not cause unnecessary renders -->)
  let [value,setValue] = useState(0)
  let count = useRef(0)

  useEffect(()=>{
    count.current += 1
  })


  //(useRef is also used to access the DOM element using ref attribute and we can access value using (variable.current.value) :- )
  

  return(
    <>
    
      <button onClick={()=> setValue((prev)=> prev-1) }>-1</button>
      <h1>{value}</h1>
      <button onClick={()=> setValue((prev)=> prev+1) }>+1</button>
      <h1>Render count : {count.current}</h1>
    
    </>
  )  

}

export default App;