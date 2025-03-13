import { MdOutlineDelete } from "react-icons/md";

function TodoItem({todoName,todoDate,deleteThisItem}){

    return(
        <div classNameName="container text-center con">

            <div classNameName="row myrow">

                <div classNameName="col-4">
                    {todoName}
                </div>
                <div classNameName="col-4">
                    {todoDate}
                </div>
                <div classNameName="col-2">
                    <button type="button" classNameName="btn btn-danger mybutton" onClick={()=>deleteThisItem(todoName,todoDate)}><MdOutlineDelete /></button> 
                </div>

            </div>

        </div>
    ); 
}

export default TodoItem;
