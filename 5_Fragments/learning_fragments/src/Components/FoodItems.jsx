import { useState } from "react";
import Items from "./items";

function FoodItems({foodmart}){

    if(foodmart.length === 0){
        return <h4>no food item available.</h4>
    }


    /* ternary operator */
    // let itemset = foodItems.length === 0 ? <h4>no food item available</h4> : null

    let [ItemColor,setItemColor] = useState([])

    let handleBuyButton = (event,item) => {
        console.log(event);
        let newColor = [...ItemColor,item];
        setItemColor(newColor);
    }


    return (

        // {itemset}   (ternary method usage) 

        <ul className="list-group">
            {foodmart.map((item) => {
                return <Items key={item}  healthy={item} bought={ItemColor.includes(item)} handleBuyButton={(event) => handleBuyButton(event,item)}></Items>  //giving key means, if we want to change any property of a particular item then using key we can change it. This is know as -----> ( key prop )
            })}
        </ul>
    );
}

export default FoodItems;