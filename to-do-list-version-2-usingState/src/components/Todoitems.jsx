import { RiDeleteBin6Fill } from "react-icons/ri";

function Todoitems({ value, date, onclickDeleteBtn }) {
  return (
    <div className="container">
      <div className="row toDo-row">
        <div className="col-5 text">{value}</div>
        <div className="col-4 text">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger bnt-add"
            onClick={() => onclickDeleteBtn(value)}
          >
            <RiDeleteBin6Fill />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitems;
