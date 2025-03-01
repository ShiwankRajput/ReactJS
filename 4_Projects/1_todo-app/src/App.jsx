import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App(){

  let todoItems = [
    {
      name : "BuyMilk",
      date : "10/11/2023"
    },
    {
      name : "Go to college",
      date : "11/10/2023"
    }
  ]

  return (
    <center class="todo-container">

      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
      
    </center>
  );
}

export default App