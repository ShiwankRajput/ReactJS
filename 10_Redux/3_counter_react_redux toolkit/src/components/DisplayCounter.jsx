import { useSelector } from "react-redux";

function DisplayCounter(){

    let counterObj = useSelector(store => store.counter)
    let counter = counterObj.counterVal

    return(
        <>
        
            <p className="lead mb-4">Current Counter Value : {counter}</p>
        
        </>
    )
}

export default DisplayCounter;