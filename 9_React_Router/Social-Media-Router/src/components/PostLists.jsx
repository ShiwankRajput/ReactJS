import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";

function PostLists(){

    let postList = useLoaderData();

    return(
        <>

            {postList.length == 0 && <WelcomeMessage onGetPostsClick={handleGetPostClick}></WelcomeMessage>}
        
            {postList.map((post)=> {
                return <Post key={post.id} post={post} />
            })}
        
        </>
    );
}

export const PostLoader = () => {

    return fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(obj => {
           return obj.posts;
        });

}

export default PostLists;