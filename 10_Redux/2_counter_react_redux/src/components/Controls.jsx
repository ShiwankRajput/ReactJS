import { useRef } from "react";
import { useDispatch } from "react-redux";

function Controls(){

    const dispatch = useDispatch();

    let inputElement = useRef();

    let handleIncrement = ()=>{
        dispatch({type: "INCREMENT"})
    }

    let handleDecrement = ()=>{
        dispatch({type: "DECREMENT"})
    }

    let handleAdd = ()=>{
        dispatch({
            type: "ADD", 
            payload:{
                num: inputElement.current.value
            }
        })

        inputElement.current.value = ""

    }

    let handleSub = ()=>{
        dispatch({
            type: "SUB",
             payload:{
                num: inputElement.current.value
            }
        })

        inputElement.current.value = ""

    }

    let handlePrivacy = ()=>{
        dispatch({
            type: "PRIVACY_TOGGLE"
        })
    }

    return(
        <>
        
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary" onClick={handleIncrement}>INCREMENT</button>
                <button type="button" className="btn btn-success" onClick={handleDecrement}>DECREMENT</button>
                <button type="button" className="btn btn-danger" onClick={handlePrivacy}>Privacy Toggle</button>
            </div>

            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center controlRow">
                <input type="text" placeholder="Enter Number" ref={inputElement}/>
                <button type="button" className="btn btn-warning" onClick={handleAdd}>ADD</button>
                <button type="button" className="btn btn-secondary" onClick={handleSub}>SUB</button>
            </div>
        
        </>
    );

}

export default Controls;