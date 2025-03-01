import css from './ButtonContainer.module.css';

function ButtonContainer(){

    let buttonName = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

    return (
        <div className={css.buttonContainer}>

            {buttonName.map((bName) => {
                return <button className={css.calButton}>{bName}</button>
            })}

        </div>
    );
}

export default ButtonContainer;