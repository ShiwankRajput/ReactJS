import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebars from '../components/Sidebars';
import CreatePost from '../components/CreatePost';
import PostLists from '../components/PostLists';
import PostListProvider from '../store/post-list-store';
import { useState } from 'react';
import { Outlet } from "react-router-dom";

function App() {

  // let[selectedTab,setSelectedTab] = useState("");

  // let selectSidebarTab = (value)=>{
  //   setSelectedTab(value);
  // }
  
  return (
    <>
      <PostListProvider>
        <div className="appContainer">
          <Sidebars></Sidebars>
          <div className="context">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
          </div>
        </div>
        </PostListProvider>

    </>
  );
}

export default App
