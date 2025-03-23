import { useEffect } from "react";

function Navbar({colors}){

    //case1: run on every render 
    useEffect(()=>{
        alert("hey i will run on every render")
    })

    //case2: run exactly once
    useEffect(()=>{
        alert("hey everyone!, i will render first time")
    },[])

    //case3: run when certain value is changed
    useEffect(()=>{
        alert("color was changed") 
    },[colors])

    //example of cleanup function
    useEffect(()=>{
        alert("Welcome to my page")

        return ()=>{
            alert("component was unmounted")
        }
    },[])

    return(
        <>
        
            <div>
                I am a navar of color hehe....
            </div>

        </>
    )
}

export default Navbar;