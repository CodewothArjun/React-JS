import Logo from "./components/LogoApp";
import AddToDo from "./components/AddToDo";
import "./App.css";
import ItemsContainer from "./components/ItemsContainer";
import MessageShow from "./components/MessageShow";
import TodoItemContexProvider from "./store/todo-items-store";
function App() {
  return (
    <TodoItemContexProvider>
      <center className="todo-container">
        <Logo></Logo>
        <AddToDo />
        <MessageShow />
        <ItemsContainer />
      </center>
    </TodoItemContexProvider>
  );
}
export default App;
