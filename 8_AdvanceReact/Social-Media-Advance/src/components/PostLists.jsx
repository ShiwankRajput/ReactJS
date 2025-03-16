import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

function PostLists(){

   let {postList, addServerPost} = useContext(PostList);

   let [fetching, setFetching] = useState(false);


    //using useEffect hook cleanup when user moves to another component
    useEffect(()=>{

        const controller = new AbortController;
        const signal = controller.signal;

        setFetching(true);
        fetch('https://dummyjson.com/posts',{signal})
        .then(res => res.json())
        .then(obj => {
            addServerPost(obj.posts)
            setFetching(false);
        });


        return ()=>{
            controller.abort();
        }

    },[]);


   //using useEffect  ---->
    /*useEffect(()=>{

        setFetching(true);
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(obj => {
            addServerPost(obj.posts)
            setFetching(false);
        });

    }, []);*/


   // this is done using state changed managemenet
   /*let [dataFetched, setDataFetched] = useState(false);

   if(!dataFetched){
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(obj => addServerPost(obj.posts));

        setDataFetched(true);
    }*/


   
   
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