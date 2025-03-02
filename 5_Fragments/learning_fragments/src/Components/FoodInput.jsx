import css from "./FoodInput.module.css";

function FoodInput({handleOnKeyChange}){

    return <input className={css.foodBox} type="text" placeholder="Enter food item here" onKeyDown={handleOnKeyChange} />
}

export default FoodInput;