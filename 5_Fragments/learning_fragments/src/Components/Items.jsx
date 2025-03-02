import css from './Items.module.css';   //this css you named can be anything you want to keep,this is note specific



/*

normal using...

*/

function Items({healthy,bought,handleBuyButton}){

    return (

        //using of handling events in react

        <li className={`${css["kgItem"]} list-group-item ${bought ? 'active' : 'null'}`}>
            {healthy}
            <button className={`${css.button} btn btn-secondary`} onClick={handleBuyButton}>Buy</button>    
        </li>   
    );
}

export default Items;






/*

using de-structuring...

*/

// function Items(props){

//     let {foodItem} = props;

//     return (
//         <li className="list-group-item">{foodItem}</li>   
//     );
// }

// export default Items;







/*

using direct de-structuring...

*/

// function Items({foodItem}){

//     return (
//         <li className="list-group-item">{foodItem}</li>   
//     );
// }

// export default Items;