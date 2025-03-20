import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction} from "../store/SliceCounter";
import { privacyAction} from "../store/SlicePrivacy";


function Controls(){

    let dispatch = useDispatch()

    let inputElement = useRef();

    let handleIncrement = ()=>{
        dispatch(counterAction.increment())
    }

    let handleDecrement = ()=>{
        dispatch(counterAction.decrement())

    }

    let handleAdd = ()=>{

        dispatch(counterAction.addition({
            num: inputElement.current.value
        }))

        inputElement.current.value = ""

    }

    let handleSub = ()=>{
        
        dispatch(counterAction.subtraction({
            num: inputElement.current.value
        }))

        inputElement.current.value = ""

    }

    let handlePrivacy = ()=>{
        dispatch(privacyAction.toggle())
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