import { createContext, useReducer } from "react";

export let PostList = createContext({
    postList : [],
    addPost : () => {},
    deletePost : () => {}
})

let postReducer = (currPostList,action) => {
    return currPostList;
}

const PostListProvider = ({ children }) => {

    let [postList, dispatchPostList] = useReducer (postReducer, DEFAULT_POST);
  
    const addPost = () => {};
  
    const deletePost = () => {};

  
    return (
      <PostList.Provider value={{ postList, addPost, deletePost }}>
        {children}
      </PostList.Provider>
    );

};

let DEFAULT_POST= [
    {
        id:'1',
        title:'MUMBAI',
        body:'Hi Friends, I am going to Mumbai on my vacations',
        reaction:2,
        userId:'user_1',
        tags:['vacation','Mumbai','enjoying']
    },
    {
        id:'2',
        title:'SHIMLA',
        body:'Hi Friends, I am going to Shimla on my vacations',
        reaction:12,
        userId:'user_2',
        tags:['vacation','Shimla','enjoying']
    }
]


export default PostListProvider;