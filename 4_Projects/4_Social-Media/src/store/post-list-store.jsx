import { createContext, useReducer } from "react";

export let PostList = createContext({
    postList : [],
    addPost : () => {},
    deletePost : () => {}
})

let postReducer = (currPostList,action) => {

    let newPostList = currPostList;

    if(action.type === "ADD_POST"){
        newPostList = [action.payload,...newPostList];
    }

    if(action.type === "DELETE_POST"){
        newPostList = newPostList.filter((post) => {
            return post.id != action.payload.postId;
        })
    }

    return newPostList;
}

const PostListProvider = ({ children }) => {

    let [postList, dispatchPostList] = useReducer (postReducer, [] );
  
    const addPost = (userId,postTitle,postContent,reaction,tags) => {
        dispatchPostList({
            type : "ADD_POST",
            payload : {
                id : Math.random(),
                title : postTitle,
                body : postContent,
                reaction : reaction,
                userId : userId,
                tags : tags
            }
        })
    };
  
    const deletePost = (postId) => {
        dispatchPostList({
            type : 'DELETE_POST',
            payload : {
                postId : postId
            }
        })
    };

  
    return (
      <PostList.Provider value={{ postList, addPost, deletePost }}>
        {children}
      </PostList.Provider>
    );

};


export default PostListProvider;