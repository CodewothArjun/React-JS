import { useState } from "react";
import ButtonContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import AppCSS from "./styles/App.module.css";

function App() {
  let [operationValue, setOperation] = useState([]);
  let OnClickButton = (buttonText) => {
    if (buttonText === "C") {
      setOperation("");
    } else if (buttonText === "=") {
      const result = eval(operationValue);
      setOperation(result)
    } else {
      console.log(buttonText);
      let newButtonText = operationValue + buttonText;
      setOperation(newButtonText);
    }
  };
  return (
    <>
      <h1>Calculator</h1>
      <div className={AppCSS.calculator}>
        <Display displayCalVal={operationValue} />
        <ButtonContainer handelOnClickButton={OnClickButton} />
      </div>
    </>
  );
}

export default App;
