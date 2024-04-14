import { useState } from "react";
import ButtonContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import AppCSS from "./styles/App.module.css";

function App() {
  let [operationValue, setOperation] = useState([]);
  let OnClickButton = () => {};
  return (
    <>
      <h1>Calculator</h1>
      <div className={AppCSS.calculator}>
        <Display />
        <ButtonContainer handelOnClickButton={OnClickButton} />
      </div>
    </>
  );
}

export default App;
