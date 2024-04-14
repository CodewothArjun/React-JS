import ButtonCSS from '../styles/ButtonContainer.module.css'

const ButtonContainer = ({handelOnClickButton}) => {
    let buttonName=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
  return (
    <div className={ButtonCSS.buttonContainer}>
        {buttonName.map((buttons)=>(<button key={buttons} className={ButtonCSS["button"]} 
        onClick={handelOnClickButton}>{buttons}</button>))}
    </div>
  );    
};

export default ButtonContainer;
