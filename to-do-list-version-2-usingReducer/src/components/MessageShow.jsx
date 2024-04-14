import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function MessageShow() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && <p className="message">Enjooy your day 🙂🌈</p>
  );
}

export default MessageShow;
