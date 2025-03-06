import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App(){

  let [todoItems,setTodoItems] = useState([]);


  let addThisItem = (todoItemName,todoItemDate)=>{

    //using spread operator...

    /*

    let newItem = [
      {
        name : todoItemName,
        date : todoItemDate
      }
    ]

    let newTodoItems = [...todoItems,...newItem]

    setTodoItems(newTodoItems);

    */



    //using functional updates --> (for asynchronous state changes)
    setTodoItems((currVal)=>{                 //here currVal acts as todoItems in useState hook.
      
      let newItem = [
        {
          name : todoItemName,
          date : todoItemDate
        }
      ]

       let newTodoItems = [...currVal,...newItem]
       return newTodoItems;
    })

  }


  let deleteThisItem = (todoName,todoDate)=>{

    let newTodoItems = todoItems.filter((item) => {
      return item.name != todoName;
    })

    setTodoItems(newTodoItems);

  }


    



  return (
    <center class="todo-container">

      <AppName></AppName>
      <AddTodo addThisItem={addThisItem}></AddTodo>
      { todoItems.length === 0 && <WelcomeMessage></WelcomeMessage> }
      <TodoItems todoItems={todoItems} deleteThisItem={deleteThisItem}></TodoItems> 
      
    </center>
  );
}

export default App