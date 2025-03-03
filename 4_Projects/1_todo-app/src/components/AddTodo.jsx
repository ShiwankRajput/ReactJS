import { useState } from "react";

function AddTodo({addThisItem}){

    let [todoItemName,setTodoItemName] = useState();
    let [todoItemDate,setTodoItemDate] = useState();

    let handleOnItem = (event)=>{
        setTodoItemName(event.target.value);
    }

    let handleOnDate = (event)=>{
        setTodoItemDate(event.target.value);
    }

    let handleIt = ()=>{
        addThisItem(todoItemName,todoItemDate);
        setTodoItemName("");
        setTodoItemDate("");
    }

    return (
    <div className="container text-center con">
        <div className="row myrow">
            <div className="col-4">
                <input type="text" placeholder="Enter todo here" className="inputName" value={todoItemName} onChange={handleOnItem}/>
            </div>
            <div className="col-4">
                <input type="date" className="inputName" value={todoItemDate} onChange={handleOnDate}/>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-success mybutton" onClick={handleIt}>Add</button>
            </div>
        </div>
    </div>
    );
}

export default AddTodo