import { useEffect } from "react";
import { useState } from "react";

function Time(){

    let [date, setDate] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setDate(new Date());
        },1000);

        return ()=>{
            clearInterval(intervalId);
        }

    },[]);

    return (
        <p>
        Current date : {date.toLocaleDateString()} <br />
        Current time : {date.toLocaleTimeString()}
    </p>
    );

}

export default Time