function ToDoFormat(){
    return <div class="container">
    <div class="row toDo-row">
    <div class="col-6"><input type="text" placeholder="Enter to do here"  /></div>
    <div class="col-4"> <input type="date"  /></div>
    <div class="col-2">  <button type="button" class="btn btn-primary bnt-add">ADD</button></div>
  </div>
  </div>
}
export default ToDoFormat;