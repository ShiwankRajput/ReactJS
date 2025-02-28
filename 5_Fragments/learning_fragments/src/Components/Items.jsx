import css from './Items.module.css';   //this css you named can be anything you want to keep,this is note specific



/*

normal using...

*/

function Items(props){

    return (
        <li className={`${css["kgItem"]} list-group-item`}>{props.healthy}</li>   
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