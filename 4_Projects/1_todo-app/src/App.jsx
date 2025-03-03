import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App(){

  let initialtodoItems = [
    {
      name : "BuyMilk",
      date : "10/11/2023"
    },
    {
      name : "Go to college",
      date : "11/10/2023"
    }
  ]


  let [todoItems,setTodoItems] = useState([]);


  let addThisItem = (todoItemName,todoItemDate)=>{

    let newItem = [
      {
        name : todoItemName,
        date : todoItemDate
      }
    ]

    let newTodoItems = [...todoItems,...newItem]

    setTodoItems(newTodoItems);

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