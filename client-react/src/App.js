import logo from "./logo.svg";
import "./App.css";
import { Component } from "./components/Component";
import { Counter } from "./components/Counter";
import { Boolean } from "./components/Boolean";
import { Messages } from "./components/Messages";

function App() {
  const reason = 42;
  return (
    <div className="App">
      <Component />
      <Counter />
      <Boolean myprop={reason} />
      <Messages />
    </div>
  );
}

export default App;
