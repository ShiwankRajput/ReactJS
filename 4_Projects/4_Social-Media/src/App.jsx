import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebars from './components/Sidebars';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import { useState } from 'react';

function App() {

  let[selectedTab,setSelectedTab] = useState("");

  let selectSidebarTab = (value)=>{
    setSelectedTab(value);
  }
  
  return (
    <>

      <div className="appContainer">
        <Sidebars selectedTab={selectedTab} selectSidebarTab={selectSidebarTab}></Sidebars>
        <div className="context">
          <Header></Header>
          {selectedTab === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>}
          <Footer></Footer>
        </div>
      </div>

    </>
  );
}

export default App
