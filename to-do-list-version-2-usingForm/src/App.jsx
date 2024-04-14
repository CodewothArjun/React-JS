import Logo from "./components/LogoApp";
import AddToDo from "./components/AddToDo";
import "./App.css";
import ItemsContainer from "./components/ItemsContainer";
import { useState } from "react";
import MessageShow from "./components/MessageShow";
import { TodoItemsContext } from "./store/todo-items-store";
function App() {
  let [itemValue, setItemValue] = useState([]);

  let addNewItems = (itemName, itemDueDate) => {
    setItemValue(() => [
      ...itemValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  let deleteItems = (nameItem) => {
    const newToDoItems = itemValue.filter((item) => item.name !== nameItem);
    setItemValue(newToDoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: itemValue,
        addNewItems,
        deleteItems,
      }}
    >
      <center className="todo-container">
        <Logo></Logo>
        <AddToDo />
        <MessageShow />
        <ItemsContainer />
      </center>
    </TodoItemsContext.Provider>
  );
}
export default App;
