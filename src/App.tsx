import "./App.css";
import Counter from "./components/Counter";
import { Stopwatch } from "./components/Stopwatch";
function App() {
  return (
    <>
      <div className="main-container">
        <Stopwatch />
        <Counter />
      </div>
    </>
  );
}

export default App;
