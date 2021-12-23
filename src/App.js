import React, {useEffect, useState} from "react";
import "./App.css";
import Input from "./components/input/Input.jsx";
import Button from "./components/button/button.js";
import { Todos } from "./components/todos/Todos.js";

function App() {
  const [inp, setInp] = useState("");

  const handleClick = () => {
    // code here....
    alert(inp)
  }

  return (
    <div className="App">
      <Input value={inp} change={setInp} />
      <Button click={handleClick} />
      <Todos />
    </div>
  );
}


export default App;
