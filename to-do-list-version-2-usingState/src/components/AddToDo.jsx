import { useState } from "react";
import FormatStyle from "./FormatToDo.module.css";
import { MdAddTask } from "react-icons/md";
function AddToDo({ handelAddButton }) {
  const [toDoName, setToDoName] = useState("");
  const [toDoDueDate, settoDoDueDate] = useState("");
  let handelOnChangeName = (event) => {
    setToDoName(event.target.value);
  };
  let handelOnChangeDate = (event) => {
    settoDoDueDate(event.target.value);
  };
  let handelAddButtonCliked = () => {
    handelAddButton(toDoName, toDoDueDate);
    setToDoName("");
    settoDoDueDate("");
  };
  return (
    <div className="container">
      <div className="row toDo-row">
        <div className="col-5">
          <input
            onChange={handelOnChangeName}
            type="text"
            placeholder="Enter to do here"
            className={FormatStyle["Input"]}
            value={toDoName}
          />
        </div>
        <div className="col-4">
          <input
            onChange={handelOnChangeDate}
            type="date"
            value={toDoDueDate}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            id={FormatStyle["add"]}
            className="btn  btn-primary bnt-add"
            onClick={handelAddButtonCliked}
          >
            <MdAddTask />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddToDo;
