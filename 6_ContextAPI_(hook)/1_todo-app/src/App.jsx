import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo_items_store";

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
    <TodoItemsContext.Provider value={{
      todoItems : todoItems, 
      addItem : addThisItem, 
      deleteItem : deleteThisItem
      }}>

      <center className="todo-container">

        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems> 
        
      </center>

    </TodoItemsContext.Provider>
  );
}

export default App