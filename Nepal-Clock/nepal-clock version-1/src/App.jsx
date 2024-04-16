import CurrentTime from "./Current_time";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="H1">Nepal Clock</h1>
      <p>This is the clock that shows the time in <span>Nepal</span> at all times</p>
      <CurrentTime />
      <br />
      <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-75"></div>
</div>

    </div>
  );
}
export default App;
