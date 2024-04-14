import canvaLogo from "./assets/canvalogo.svg";
import canvaPic from "./assets/canvapic.jpeg";
import { GoHome } from "react-icons/go";
import { TbHelp } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { PiNotePencil } from "react-icons/pi";
import { TbLayoutBoardSplit } from "react-icons/tb";
import { ImImages } from "react-icons/im";
import { LuDownload } from "react-icons/lu";
import "./App.css";
function App() {
  return (
    <>
      <header>
        <img src={canvaLogo} className="canvaLogo" alt="Logo" />
        <nav className="nav">
          <button className="active">Design Spolight</button>
          <button>Business</button>
          <button>Eductaion</button>
          <button>Plans and Pricing</button>
          <button>Learn</button>
        </nav>
        <div className="right-nav">
          <GoHome className="iconr" size={30} />
          <TbHelp className="iconr" size={30} />
          <CgProfile className="iconr" size={45} />
        </div>
      </header>
      <main>
        <div className="outer">
          <div className="top-sec">
            <div className="left-side">
              <h1 className="content-text">Free website maker</h1>
              <button className="continue-btn">Creating a website</button>
            </div>
            <img className="CanvaPic" src={canvaPic} alt="Canva Picture" />
          </div>
          <div className="lower">
            <p className="desc-icon"> <PiNotePencil size={20}/> Easy to create and customize</p>
            <p className="desc-icon"> <TbLayoutBoardSplit size={20}/> Thousands of free templates and layouts</p>
            <p className="desc-icon"> <ImImages size={20}/> Millions of photos, icons and illustrations</p>
            <p className="desc-icon"> <LuDownload size={22}/> Easily download or share</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
