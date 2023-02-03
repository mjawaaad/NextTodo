import React from 'react'
import CounterApp from './counter-app';
import CounterAppAdvance from './counter-app-advance';
import StrPrac from './str-prac'
import Todo from './todo';
export default function index() {
  return (
<>

    <h1>String Practice</h1>
    <StrPrac />
    <br />
    <h1>Counter App</h1>
    <CounterApp/>
    <h1>Counter App Advance</h1>
    <CounterAppAdvance/>
    <h1>Todo List</h1>
    <Todo/>
</>
  );
}
