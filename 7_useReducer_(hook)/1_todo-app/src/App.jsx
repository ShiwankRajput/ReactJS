import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useReducer, useState } from "react";


// the actual work of adding and deleting items is done by reducer function
let todoItemsReducer = (todoItems,action) => {

  let newTodoItems = todoItems;

  if(action.type === "NEW_ITEM"){
    newTodoItems = [{
        name : action.payload.todoItemName,
        date : action.payload.todoItemDate
      }]
  

    newTodoItems = [...todoItems,...newTodoItems]

  }
  else if(action.type === "DEL_ITEM"){
    newTodoItems = todoItems.filter((item) => {
      return item.name != action.payload.todoName;
    })
  }

  return newTodoItems;
}

function App(){

  let [todoItems,dispatchTodoItems] = useReducer(todoItemsReducer,[]);


  //this function describes what is happening....
  let addThisItem = (todoItemName,todoItemDate)=>{

    let newItemAction = {
      type : "NEW_ITEM",
      payload : {
        todoItemName : todoItemName,
        todoItemDate : todoItemDate
      }
    }

    dispatchTodoItems(newItemAction);   // now this dispatch action will be handle by reducer function.

  }


  let deleteThisItem = (todoName,todoDate)=>{

    let deleteItemAction = {
      type : "DEL_ITEM",
      payload : {
        todoName : todoName,
        todoDate : todoDate
      }
    } 

    dispatchTodoItems(deleteItemAction);

  }


    



  return (
    <center class="todo-container">

      <AppName></AppName>
      <AddTodo addThisItem={addThisItem}></AddTodo>
      <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
      <TodoItems todoItems={todoItems} deleteThisItem={deleteThisItem}></TodoItems> 
      
    </center>
  );
}

export default App