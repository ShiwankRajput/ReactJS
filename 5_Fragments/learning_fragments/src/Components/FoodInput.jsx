import css from "./FoodInput.module.css";

function FoodInput({handleOnChange}){

    return <input className={css.foodBox} type="text" placeholder="Enter food item here" onChange={handleOnChange} />
}

export default FoodInput;