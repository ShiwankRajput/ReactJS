function WelcomeMessage({onGetPostsClick}){
    return (
        <center className="welcomeMessage">
            <h1>There is no Post.</h1>
            <button type="button" className="btn btn-primary" onClick={onGetPostsClick}>Get Post from Server</button>
        </center>
    );
}

export default WelcomeMessage;