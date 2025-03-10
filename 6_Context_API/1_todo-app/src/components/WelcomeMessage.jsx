import css from './WelcomeMessage.module.css';
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo_items_store";

function WelcomeMessage(){

    const contextObj = useContext(TodoItemsContext);
    const todoItems = contextObj.todoItems;

    return (
        (todoItems.length ===0) && (<p>Welcome to todo item list</p>)
    );
}

export default WelcomeMessage;