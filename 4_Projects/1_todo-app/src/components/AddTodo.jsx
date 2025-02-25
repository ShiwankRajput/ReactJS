function AddTodo(){

    return (
    <div className="container text-center con">
        <div className="row myrow">
            <div className="col-4">
                <input type="text" placeholder="Enter todo here" />
            </div>
            <div className="col-4">
                <input type="date" />
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-success mybutton">Add</button>
            </div>
        </div>
    </div>
    );
}

export default AddTodo