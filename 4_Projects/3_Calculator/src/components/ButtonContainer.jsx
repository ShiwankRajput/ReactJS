import css from './ButtonContainer.module.css';

function ButtonContainer({buttonClicked}){

    let buttonName = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

    return (
        <div classNameName={css.buttonContainer}>

            {buttonName.map((bName) => {
                return <button classNameName={css.calButton} onClick={buttonClicked} >{bName}</button>
            })}

        </div>
    );
}

export default ButtonContainer;