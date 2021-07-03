import "./App.css";
import { Counter, CounterHooks } from "./snippets/Counter.jsx";
import Header from "./snippets/Header";

function App() {
  return (
    <div className="App">
      <h2>Welcome To React Project</h2>
      <Header />
      <Counter />
      <CounterHooks />
    </div>
  );
}

export default App;
