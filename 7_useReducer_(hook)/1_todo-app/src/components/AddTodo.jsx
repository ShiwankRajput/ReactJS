import { use } from "react";
import { useState, useRef } from "react";
import { RiAddLargeFill } from "react-icons/ri";


function AddTodo({addThisItem}){

    /*
    
    understanding hooks....

    */



    // let [todoItemName,setTodoItemName] = useState("");   //change the state while repainting components.
    // let [todoItemDate,setTodoItemDate] = useState("");


    let addTodoName = useRef();  //   ( USECASE ) ---> when using useref, we can change the state without repainting or calling the function / our components / or website.
    let addTodoDate = useRef();



    /* let handleOnItem = (event)=>{
        setTodoItemName(event.target.value);
        event.target.value = "";
    }

    let handleOnDate = (event)=>{
        setTodoItemDate(event.target.value);
        event.target.value = "";
    } */


    let handleIt = (event)=>{
        event.preventDefault();
        let todoItemName = addTodoName.current.value;
        let todoItemDate = addTodoDate.current.value;

        addTodoName.current.value = "";
        addTodoDate.current.value = "";

        addThisItem(todoItemName,todoItemDate);

        // setTodoItemName("");
        // setTodoItemDate("");
    }

    return (

    <div className="container text-center con">

        <form className="row myrow" onSubmit={handleIt}>
          
            <div className="col-4">
                <input type="text" placeholder="Enter todo here" className="inputName"  ref={addTodoName} required/>
            </div>

            <div className="col-4">
                <input type="date" className="inputName"  ref={addTodoDate} required/>
            </div>
 
            <div className="col-2">
                <button className="btn btn-success mybutton" ><RiAddLargeFill />
                 </button>
            </div>

        </form>

    </div>

    );
}

export default AddTodo