import { useContext } from "react";
import Post from "./Post";
import { PostList } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

function PostLists(){

   let {postList, addServerPost} = useContext(PostList);

   let handleGetPostClick = ()=>{
    fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(obj => addServerPost(obj.posts));
   }

    return(
        <>

            {postList.length == 0 && <WelcomeMessage onGetPostsClick={handleGetPostClick}></WelcomeMessage>}
        
            {postList.map((post)=> {
                return <Post key={post.id} post={post} />
            })}
        
        </>
    );
}

export default PostLists;