import { useContext } from "react";
import Todoitems from "./Todoitems";
import { TodoItemsContext } from "../store/todo-items-store";

function ItemsContainer() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className="container">
      {todoItems.map((item) => (
        <Todoitems
          value={item.itemName}
          key={item.itemName}
          date={item.itemDueDate}
        />
      ))}
    </div>
  );
}

export default ItemsContainer;
