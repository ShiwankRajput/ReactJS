import React from "react";
import FoodItems from "./Components/FoodItems";

function App(){

  let foodItems = ['roti','dal','salad','green vegetables','eggs','ghee'];
  // let foodItems = [];

  return (

    //using fragments there is no need to make a parent div or other element to run the application. Therefore it reduces the use of using empty element as parent.

    <React.Fragment>  

      <h1>Healthy food (using map mathod)</h1>
      <FoodItems foodmart={foodItems}></FoodItems>

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