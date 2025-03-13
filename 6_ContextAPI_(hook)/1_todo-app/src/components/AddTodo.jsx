import { use } from "react";
import { useState, useRef } from "react";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo_items_store";
import { RiAddLargeFill } from "react-icons/ri";


function AddTodo(){

    /*
    
    understanding hooks....

    */



    // let [todoItemName,setTodoItemName] = useState("");   //change the state while repainting components.
    // let [todoItemDate,setTodoItemDate] = useState("");


    /* let handleOnItem = (event)=>{
        setTodoItemName(event.target.value);
        event.target.value = "";
    }

    let handleOnDate = (event)=>{
        setTodoItemDate(event.target.value);
        event.target.value = "";
    } */


    
    let addTodoName = useRef();  //   ( USECASE ) ---> when using useref, we can change the state without repainting or calling the function / our components / or website.
    let addTodoDate = useRef();
    


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

    const contextObj = useContext(TodoItemsContext);
    const addThisItem = contextObj.addItem;

    return (

    <div classNameName="container text-center con">

        <form classNameName="row myrow" onSubmit={handleIt}>
          
            <div classNameName="col-4">
                <input type="text" placeholder="Enter todo here" classNameName="inputName"  ref={addTodoName} required/>
            </div>

            <div classNameName="col-4">
                <input type="date" classNameName="inputName"  ref={addTodoDate} required/>
            </div>
 
            <div classNameName="col-2">
                <button classNameName="btn btn-success mybutton" ><RiAddLargeFill />
                 </button>
            </div>

        </form>

    </div>

    );
}

export default AddTodo