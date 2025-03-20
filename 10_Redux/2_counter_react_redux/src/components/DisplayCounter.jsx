import { useSelector } from "react-redux";

function DisplayCounter(){

    let counter = useSelector(store => store.counter)

    return(
        <>
        
            <p className="lead mb-4">Current Counter Value : {counter}</p>
        
        </>
    )
}

export default DisplayCounter;