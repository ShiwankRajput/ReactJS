import React from "react";
import FoodItems from "./Components/FoodItems";
import "./App.css";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";

function App(){

  let foodItems = ['roti','dal','salad','green vegetables','eggs','ghee'];

  let textToShow = "Food item entered by user."

  let handleOnChange = (event) => {
    console.log(event);
    console.log(event.target.value);
    textToShow = event.target.value;
  }

  return (

    //using fragments there is no need to make a parent div or other element to run the application. Therefore it reduces the use of using empty element as parent.

    // learning props children

    <React.Fragment>

      <Container>

        <h1>Healthy food (using map and props children)</h1>

        <FoodInput handleOnChange={handleOnChange}></FoodInput>
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
  <ul class="list-group">
    <li class="list-group-item">Roti</li>
    <li class="list-group-item">Dal</li>
    <li class="list-group-item">Green Vegetables</li>
    <li class="list-group-item">Milk</li>
    <li class="list-group-item">Eggs</li>
  </ul>

</>

*/ 