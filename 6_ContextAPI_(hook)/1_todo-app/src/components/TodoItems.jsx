import { useContext } from "react";
import { TodoItemsContext } from "../store/todo_items_store";
import TodoItem from "./TodoItem";

function TodoItems(){

    const contextObj = useContext(TodoItemsContext);
    const todoItems = contextObj.todoItems;
    const deleteThisItem = contextObj.deleteItem;
    

    return (
        <div className="item-container">
            {todoItems.map((item) => {
                return <TodoItem key={item} todoName={item.name} todoDate={item.date} deleteThisItem={deleteThisItem}></TodoItem> 

            })}
            

            {/* <TodoItem todoName="buy Milk" todoDate="10/11/2023"></TodoItem>
            <TodoItem todoName="Go to college" todoDate="10/11/2023"></TodoItem> */}

        </div>
    );
}

export default TodoItems;