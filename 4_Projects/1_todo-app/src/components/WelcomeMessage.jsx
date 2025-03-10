import css from './WelcomeMessage.module.css';

function WelcomeMessage({todoItems}){

    return (
        (todoItems.length ===0) && (<p>Welcome to todo item list</p>)
    );
}

export default WelcomeMessage;