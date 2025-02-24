
//reusable component 

function Random(){
    
    let random = Math.round(Math.random()*10);

    return <h3 style={{'background-color':'blue'}}>
        Random number is : {random}
    </h3>
}

export default Random;
