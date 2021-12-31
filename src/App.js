import React, { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/input/Input.jsx";
import Button from "./components/button/button.js";
import { Todos } from "./components/todos/Todos.js";

function App() {
  const [inp, setInp] = useState(""); // State [значение, Функция которая заменяет значение]
  const [todoList, setTodoList] = useState([ {id: 1, title: "Купить сахар", status: false} ]);
  console.log(todoList);
  const handleClick = () => {
    if (inp !== "") {
      setTodoList([...todoList, { id: Math.random(), title: inp, status: false }]);
      setInp("")
    }
  }

  const handleDelete = (el) => {
    const newArr = todoList.filter((item) => el.id !== item.id )
    setTodoList(newArr);
  }

  const handleCompleate = (el) => {
    const newArr = todoList.map( (item) => el.id === item.id ? { ...item, status: !item.status} : item)
    setTodoList(newArr)
  }

  return (
    <div className="App">
      <Input value={inp} change={setInp} />
      <Button click={handleClick} />
      <Todos list={todoList} onDelete={handleDelete} onDone={handleCompleate} />
    </div>
  );
}


export default App;
