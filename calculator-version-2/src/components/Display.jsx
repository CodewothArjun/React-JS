import AppCSS from '../styles/Display.module.css'


function Display({displayCalVal}) {
  return (
    <>
      <input type="text" className={AppCSS.display} value={displayCalVal} readOnly />
    </>
  );
}

export default Display;
