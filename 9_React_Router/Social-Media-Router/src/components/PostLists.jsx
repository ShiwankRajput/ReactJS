import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

function PostLists({fetching}){

   let {postList} = useContext(PostList);


   //fetch  api here is handle using button -->

   let handleGetPostClick = ()=>{
    // fetch('https://dummyjson.com/posts')
    //     .then(res => res.json())
    //     .then(obj => addServerPost(obj.posts));
   }

    return(
        <>

            {fetching && <LoadingSpinner></LoadingSpinner>}

            {!fetching && postList.length == 0 && <WelcomeMessage onGetPostsClick={handleGetPostClick}></WelcomeMessage>}
        
            {!fetching && postList.map((post)=> {
                return <Post key={post.id} post={post} />
            })}
        
        </>
    );
}

export default PostLists;