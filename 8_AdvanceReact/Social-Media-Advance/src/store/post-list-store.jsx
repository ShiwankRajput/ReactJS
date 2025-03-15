import { createContext, useReducer } from "react";

export let PostList = createContext({
    postList : [],
    addPost : () => {},
    addServerPost : () => {},
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

    const addServerPost = (posts) => {
        dispatchPostList({
            type : "ADD_SERVER_POST",
            payload : {
                posts
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
      <PostList.Provider value={{ postList, addPost, addServerPost, deletePost }}>
        {children}
      </PostList.Provider>
    );

};


// let DEFAULT_POSTLIST = fetch('https://dummyjson.com/posts')
// .then(res => res.json())
// .then(obj => obj.posts);


export default PostListProvider;