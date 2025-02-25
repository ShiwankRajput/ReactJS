function Time(){

    let date = new Date();

    return (
        <p>
        Current date : {date.toLocaleDateString()} <br />
        Current time : {date.toLocaleTimeString()}
    </p>
    );

}

export default Time