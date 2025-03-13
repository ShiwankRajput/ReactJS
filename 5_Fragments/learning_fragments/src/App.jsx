import React, { useState } from "react";
import FoodItems from "./Components/FoodItems";
import "./App.css";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";

function App(){

  let [foodItems, setFoodItem] = useState(['dal','salad','green vegetables']);

  /*

  let textToShow = "Food item entered by user."  //this is not going to change as it App component is called one which does not maintain state, thus we use useState hook to maintain its state.

  useState hook :- return array val and a method to change it

  */

  let textStateArr = useState("Food item entered by user.")
  let textToShow = textStateArr[0];
  let setTextState = textStateArr[1];



  let onKeyChange = (event) => {
    if(event.key == 'Enter'){
      let newFoodItem = event.target.value;
      let newItems = [...foodItems,newFoodItem];
      event.target.value = "";
      setFoodItem(newItems);   //this method basically calls the App function or component again to re-paint it. 
      console.log('Enter item is : ' + newFoodItem);
    }

    // setTextState(event.target.value);   {for text to show after input box}
  }

  return (

    //using fragments there is no need to make a parent div or other element to run the application. Therefore it reduces the use of using empty element as parent.

    // learning props children

    <React.Fragment>

      <Container>

        <h1>Healthy food (using map and props children)</h1>

        <FoodInput handleOnKeyChange={onKeyChange}></FoodInput>
        <p>{textToShow}</p>

        <FoodItems foodmart={foodItems}></FoodItems>

      </Container>

      <Container>
        <p>Above is the list of healthy food items.</p>
        <p>Eating Healthy foods helps in improving our Stamina and Strength.</p>
      </Container>

    </React.Fragment>


  );
}

export default App;



/*

Another method of using fragments is :- (there is no need to import React from "react")

<>

  <h1>Healthy foods</h1>
  <ul className="list-group">
    <li className="list-group-item">Roti</li>
    <li className="list-group-item">Dal</li>
    <li className="list-group-item">Green Vegetables</li>
    <li className="list-group-item">Milk</li>
    <li className="list-group-item">Eggs</li>
  </ul>

</>

*/ 