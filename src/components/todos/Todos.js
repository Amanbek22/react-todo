import { useState, useEffect } from "react";
import css from "./Todos.module.css"



export const TodoItem = (props) => { // props = { value: "Купить сахар" }
  // console.log(props); // { value: "Купить сахар" }
  return (
    <li className={css.item} >{props.value}</li>
  )
}


export const Todos = () => {
  const [todoList, setTodoList] = useState([
    "Купить сахар",
    "Купить соль",
    "Куить колу"
  ]);

  return (
    <ul>
      {
        todoList.map((item) => {
          return <TodoItem value={item} /> // TodoItem({ value: "Купить сахар" })
        })
        // [
        //   <TodoItem value="Купить сахар" />,
        //   <TodoItem value="Купить сахар" />,
        //   <TodoItem value="Купить сахар" />,
        // ]
      }
    </ul>
  );
};



function Test() {
  return <div>Test</div>
}

export default Test;