import { useState, useEffect } from "react";
import css from "./Todos.module.css"



export const TodoItem = (props) => { // props = { value: "Купить сахар" }
  const del = () => {
    props.onDelete(props.value)
  }
  return (
    <li className={css.item} > 
      <button onClick={del}>Delete</button>
      {" "}
      <button onClick={() => props.onDone(props.value)}>Compleate</button>
      {" "}
      <span className={props.value.status ? css.done : null}>{props.value.title}</span>
    </li>
  )
}


export const Todos = (props) => {
  
  return (
    <ul>
      {
        props.list.map((item) => {
          return <TodoItem value={item} onDelete={props.onDelete} onDone={props.onDone} /> // TodoItem({ value: "Купить сахар" })
        })
        // [
        //   <TodoItem value="Купить сахар" onDelete={f} />,
        //   <TodoItem value="asdasd" onDelete={f} />,
        // ]
      }
    </ul>
  );
};



function Test() {
  return <div>Test</div>
}

export default Test;