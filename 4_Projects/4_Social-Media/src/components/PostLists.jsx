import { useContext } from "react";
import Post from "./Post";
import { PostList } from "../store/post-list-store";

function PostLists(){

   let {postList} = useContext(PostList);

    return(
        <>
        
            {postList.map((post)=> {
                return <Post key={post.id} post={post} />
            })}
        
        </>
    );
}

export default PostLists;