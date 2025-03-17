import { Form, redirect } from "react-router-dom";


function CreatePost(){

     const handleSubmit = (event) => {
        

    }


    return(
        <>
        
            <Form method="POST" className="createPost">

            <div className="mb-3">
                <label forname="userId" className="form-label">User Id : </label>
                <input type="text" className="form-control" id="userId" placeholder="Please enter your User Id" name="userId"/>
            </div>    

            <div className="mb-3">
                <label forname="title" className="form-label">Post Title : </label>
                <input type="text" className="form-control" id="title" placeholder="What are you feeling today?" name="title"/>
            </div>

            <div className="mb-3">
                <label forname="body" className="form-label">Post Content : </label>
                <textarea rows={4} type="text" className="form-control" id="title" placeholder="What are you feeling today?" name="body"/>
            </div>

            <div className="mb-3">
                <label forname="reaction" className="form-label">Number of Reaction : </label>
                <input type="text" className="form-control" id="reaction" placeholder="Enter the number of reaction you get on your post" name="reaction"/>
            </div>

            <div className="mb-3">
                <label forname="hastags" className="form-label">Enter hastags for post : </label>
                <input type="text" className="form-control" id="hashtags" placeholder="Enter all your hashtags with space" name="tag"/>
            </div>

            <button type="submit" className="btn btn-primary">Post</button>
            </Form>
        
        </>
    );

}

export async function createPostAction(data){

    let formData = await data.request.formData()
    let postData = Object.fromEntries(formData)
    console.log(postData)

    fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      })
      .then(res => res.json())
      .then((post) => {
        // addPost(post)
        console.log(post)
    });

    return redirect("/")    

}

export default CreatePost;