import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import PostListProvider from "../store/Post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="conatiner">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="sub-container">
            <Header />
            <Outlet/>
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
