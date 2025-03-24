import { useContext } from "react"
import { counterContext } from "./store/ContextStore"

function Component1(){

    let val = useContext(counterContext)

    return(
        
        <div>
            {val}
        </div>
        
    )

}

export default Component1