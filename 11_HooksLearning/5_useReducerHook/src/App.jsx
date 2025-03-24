import { useReducer, useState } from 'react';
import './App.css'

function App(){

  // using useState ---->

  /* 

  let [count, setCount] = useState(0);

  let incCount = ()=>{
    setCount(prev => prev+1)
  }

  let decCount = ()=>{
    setCount(prev => prev-1)
  }

  */


  // now using usereducer instead of useState

  let counterReducer = (state, action) => {

    if(action.type === "INCREMENT"){
      return {count: state.count + action.payload.num}
    }
    else if(action.type === "DECREMENT"){
      return {count: state.count-1}
    }

  }

  let [state, dispatch] = useReducer(counterReducer, {count: 0})

  let incCount = ()=>{
    dispatch({
      type:"INCREMENT",
      payload: {
        num : 4
      }
    })
  }

  let decCount = ()=>{
    dispatch({
      type:"DECREMENT"
    })
  }

  return(

    <>

      <center>
        <h1>Counter : {state.count}</h1>
        <button onClick={incCount}>increment</button>
        <button onClick={decCount}>decrement</button>
      </center>
    
    </>
  )

}

export default App;