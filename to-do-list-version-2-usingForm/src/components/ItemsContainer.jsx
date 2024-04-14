import { useContext } from "react";
import Todoitems from "./Todoitems";
import { TodoItemsContext } from "../store/todo-items-store";

function ItemsContainer() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className="container">
      {todoItems.map((item) => (
        <Todoitems value={item.name} key={item.name} date={item.dueDate} />
      ))}
    </div>
  );
}

export default ItemsContainer;
