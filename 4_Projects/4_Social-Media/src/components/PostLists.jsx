import { useContext } from "react";
import Post from "./Post";
import { PostList } from "../store/post-list-store";

function PostLists(){

   let {postList} = useContext(PostList);

    return(
        <>
        
            {postList.map((post)=> {
                return <Post/>
            })}
        
        </>
    );
}

export default PostLists;