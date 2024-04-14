import Logo from "./components/LogoApp";
import ToDoContent from "./components/ToDoContent";
import ToDoFormat from "./components/FormatToDo";
import ToDoContent2 from "./components/ToDoContent2";
import "./App.css";
function App() {
  return (
    <div>
      <center className="todo-container">
        <Logo></Logo>
        <ToDoFormat />
        <ToDoContent />
        <ToDoContent2 />
        <ToDoContent />
        <ToDoContent2 />
      </center>
    </div>
  );
}
export default App;
