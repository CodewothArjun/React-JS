import { useRef } from "react";
import FormatStyle from "./FormatToDo.module.css";
import { MdAddTask } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
function AddToDo() {
  const { addNewItems } = useContext(TodoItemsContext);
  const toDoNameElement = useRef();
  const dueDateElement = useRef();

  let handelAddButtonCliked = (event) => {
    event.preventDefault();
    const toDoName = toDoNameElement.current.value;
    const toDoDueDate = toDoNameElement.current.value;
    toDoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItems(toDoName, toDoDueDate);
  };
  return (
    <div className="container">
      <form className="row toDo-row" onSubmit={handelAddButtonCliked}>
        <div className="col-5">
          <input
            type="text"
            placeholder="Enter to do here"
            className={FormatStyle["Input"]}
            ref={toDoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button
            type="submit"
            id={FormatStyle["add"]}
            className="btn  btn-primary bnt-add"
          >
            <MdAddTask />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddToDo;
