import { memo } from "react";

function Navbar({adjective,getAdjective}){

    console.log("Navbar is rendered")

    return(
        <div>
            I am a {adjective} navbar
            <button onClick={getAdjective()}>Change me</button>
        </div>
    )

}

export default memo(Navbar);