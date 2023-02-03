"use client";
import { NodeNextRequest } from "next/dist/server/base-http/node";
import React, { useState } from "react";

export default function Todo() {
    const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([
    { todoText: "hello", completed: true },
    { todoText: "world", completed: false },
  ]);

  const onClickHandler = (meraElm: any) => {
    console.log("meraElm", meraElm);

    const newTodos = todos.map(todo=>{
        if (todo.todoText == meraElm.todoText){
            todo.completed = !todo.completed;
        }
        return todo;
    });

    setTodos(newTodos);
    
  };

  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false}
    const newTodos = [...todos, newTodo]
    setTodos[newTodos]
  }

  return (

    <>
    <div>Todos</div>
    <input placeholder="add todo" value={todo} onChange={(e) => {setTodo(e.target.value)}}/>
    <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((elm) => {
          return <li 
          style={{
            listStyle: "none",
          }}
           key={elm.todoText}
           >
            <input type="checkbox" checked={elm.completed} onClick={()=> {onClickHandler(elm)}} />
            {elm.todoText}</li>;
        })}
      </ul>
    </>
  );
}
