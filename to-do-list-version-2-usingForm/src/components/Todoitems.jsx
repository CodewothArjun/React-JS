import { useContext } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { TodoItemsContext } from "../store/todo-items-store";

function Todoitems({ value, date }) {
  const { deleteItems } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row toDo-row">
        <div className="col-5 text">{value}</div>
        <div className="col-4 text">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger bnt-add"
            onClick={() => deleteItems(value)}
          >
            <RiDeleteBin6Fill />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitems;
