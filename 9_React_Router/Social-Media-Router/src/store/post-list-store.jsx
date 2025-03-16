import { useCallback } from "react";
import { createContext, useReducer, useState, useEffect } from "react";

export let PostList = createContext({
    postList : [],
    fetching : false,
    addPost : () => {},
    deletePost : () => {}
})

let postReducer = (currPostList,action) => {

    let newPostList = currPostList;

    if(action.type === "ADD_POST"){
        newPostList = [action.payload,...newPostList];
    }

    else if(action.type === "DELETE_POST"){
        newPostList = newPostList.filter((post) => {
            return post.id != action.payload.postId;
        })
    }

    else if(action.type === "ADD_SERVER_POST"){
        newPostList = action.payload.posts;
    }

    return newPostList;
}

const PostListProvider = ({ children }) => {

    let [postList, dispatchPostList] = useReducer (postReducer, []);

    let [fetching, setFetching] = useState(false);
    
  
    const addPost = (post) => {
        dispatchPostList({
            type : "ADD_POST",
            payload : post
        })
    };

    const addServerPost = (posts) => {
        dispatchPostList({
            type : "ADD_SERVER_POST",
            payload : {
                posts
            }
        })
    };
  
    const deletePost = useCallback((postId) => {
        dispatchPostList({
            type : 'DELETE_POST',
            payload : {
                postId : postId
            }
        })

    }, [dispatchPostList] );


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

  
    return (
      <PostList.Provider value={{ postList, fetching, addPost, deletePost }}>
        {children}
      </PostList.Provider>
    );

};


// let DEFAULT_POSTLIST = fetch('https://dummyjson.com/posts')
// .then(res => res.json())
// .then(obj => obj.posts);


export default PostListProvider;