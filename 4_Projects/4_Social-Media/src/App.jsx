import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebars from './components/Sidebars';
import CreatePost from './components/CreatePost';
import PostLists from './components/PostLists';
import PostListProvider from './store/post-list-store';
import { useState } from 'react';

function App() {

  let[selectedTab,setSelectedTab] = useState("");

  let selectSidebarTab = (value)=>{
    setSelectedTab(value);
  }
  
  return (
    <>
      <PostListProvider>
        <div className="appContainer">
          <Sidebars selectedTab={selectedTab} selectSidebarTab={selectSidebarTab}></Sidebars>
          <div className="context">
            <Header></Header>
            {selectedTab === "Home" ? <PostLists></PostLists> : <CreatePost></CreatePost>}
            <Footer></Footer>
          </div>
        </div>
        </PostListProvider>

    </>
  );
}

export default App
