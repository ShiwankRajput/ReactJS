import css from './Display.module.css';

function Display({displayValue}){
    return <input classNameName={css.display} type="text" value={displayValue} readOnly />;
}

export default Display;