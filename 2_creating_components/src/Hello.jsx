
/*

    dynamic component...(uses {} for injecting javascript dynamically) 
    
*/

function Hello(){

    let name = "Shiwank"

    let fullName = function (){
       return 'Shiwank Kumar';
    }

    return <p>
        My name is {name} and My fullname is {fullName()}
    </p>
}

export default Hello;