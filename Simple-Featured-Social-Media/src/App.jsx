import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/Post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="conatiner">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="sub-container">
            <Header />
            {selectedTab === "Home" ? <PostList /> : <CreatePost />}
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
