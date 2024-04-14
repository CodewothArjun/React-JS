import Logo from "./components/LogoApp";
import AddToDo from "./components/AddToDo";
import "./App.css";
import ItemsContainer from "./components/ItemsContainer";
import { useState } from "react";
import MessageShow from "./components/MessageShow";
function App() {
  let toDoInitialValue = [];

  let [itemValue, setItemValue] = useState(toDoInitialValue);
  let onClickAdd = (itemName, itemDueDate) => {
    let newItemAdd = [
      ...itemValue,
      { name: itemName, dueDate: itemDueDate },
    ];
    setItemValue(newItemAdd);
  };

  let handelDeleteButton =(nameItem)=>{
    const newToDoItems=itemValue.filter(item=>item.name!==nameItem)
    setItemValue(newToDoItems);
  }

  return (
    <div>
      <center className="todo-container">
        <Logo></Logo>
        <AddToDo handelAddButton={onClickAdd} />
        {itemValue.length<=0&&<MessageShow initialValue={toDoInitialValue} />}
        <ItemsContainer items={itemValue}  onclickDeleteBtn={handelDeleteButton} />
      </center>
    </div>
  );
}
export default App;
