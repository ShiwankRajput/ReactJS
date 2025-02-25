function TodoItem2(){

    let todoName = 'Go to college'
    let todoDate = '14/03/2023'

    return(
        <div className="container text-center con">

            <div className="row myrow">

                <div className="col-4">
                    {todoName}
                </div>
                <div className="col-4">
                    {todoDate}
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger mybutton">Delete</button>
                </div>

            </div>

        </div>
    ); 
}

export default TodoItem2
