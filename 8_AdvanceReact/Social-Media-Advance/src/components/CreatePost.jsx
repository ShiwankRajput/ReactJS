import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

function CreatePost(){

    const {addPost} = useContext(PostList);

    const userIdElement= useRef();
    const postTitleElement = useRef();
    const postContentElement = useRef();
    const reactionElement = useRef();
    const hastagsElement = useRef();


    const handleSubmit = (event) => {
        event.preventDefault();

        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postContent = postContentElement.current.value;
        const reaction = reactionElement.current.value;
        const tags = hastagsElement.current.value.split(" ");

        userIdElement.current.value = ""
        postTitleElement.current.value = ""
        postContentElement.current.value = ""
        reactionElement.current.value = ""
        hastagsElement.current.value = ""

        addPost(userId,postTitle,postContent,reaction,tags);

    }


    return(
        <>
        
            <form className="createPost" onSubmit={handleSubmit}>

            <div className="mb-3">
                <label forname="userId" className="form-label">User Id : </label>
                <input type="text" className="form-control" id="userId" placeholder="Please enter your User Id" ref={userIdElement}/>
            </div>    

            <div className="mb-3">
                <label forname="title" className="form-label">Post Title : </label>
                <input type="text" className="form-control" id="title" placeholder="What are you feeling today?" ref={postTitleElement}/>
            </div>

            <div className="mb-3">
                <label forname="body" className="form-label">Post Content : </label>
                <textarea rows={4} type="text" className="form-control" id="title" placeholder="What are you feeling today?" ref={postContentElement}/>
            </div>

            <div className="mb-3">
                <label forname="reaction" className="form-label">Number of Reaction : </label>
                <input type="text" className="form-control" id="reaction" placeholder="Enter the number of reaction you get on your post" ref={reactionElement}/>
            </div>

            <div className="mb-3">
                <label forname="hastags" className="form-label">Enter hastags for post : </label>
                <input type="text" className="form-control" id="hashtags" placeholder="Enter all your hashtags with space" ref={hastagsElement}/>
            </div>

            <button type="submit" className="btn btn-primary">Post</button>
            </form>
        
        </>
    );

}

export default CreatePost;