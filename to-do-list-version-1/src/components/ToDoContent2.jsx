function ToDoContent() {
  let value = "Video Editing";
  let date = "01/13/2023";
  return (
    <div class="container">
      <div class="row toDo-row">
        <div class="col-6 text">{value}</div>
        <div class="col-4 text">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger bnt-add">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoContent;
