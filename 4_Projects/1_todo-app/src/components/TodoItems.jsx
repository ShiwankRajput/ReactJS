import TodoItem from "./TodoItem";

function TodoItems({todoItems}){
    return (
        <div className="item-container">
            {todoItems.map((item) => {
                return <TodoItem todoName={item.name} todoDate={item.date}></TodoItem>

            })}
            
            <TodoItem todoName="buy Milk" todoDate="10/11/2023"></TodoItem>
            <TodoItem todoName="Go to college" todoDate="10/11/2023"></TodoItem>
        </div>
    );
}

export default TodoItems;