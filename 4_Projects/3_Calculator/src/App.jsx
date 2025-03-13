import css from './App.module.css'
import Display from './components/Display';
import ButtonContainer from './components/ButtonContainer';
import { useState } from 'react';

function App() {

  let [calVal,setCalVal] = useState("");
  

  let buttonClicked = (event)=>{
    if(event.target.innerText === 'C'){
      setCalVal("");
    }
    else if(event.target.innerText === '='){
      let result = eval(calVal)
      setCalVal(result);
    }
    else{
      let newCalVal = calVal + event.target.innerText
      setCalVal(newCalVal);
    }
  }


  return (
    <>
      <div classNameName={css.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonContainer buttonClicked={buttonClicked}></ButtonContainer>
      </div>
    </>
  );
}

export default App 
