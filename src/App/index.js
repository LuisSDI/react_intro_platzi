
// import './App.css';

import React from "react";
import { AppUI } from "./AppUI";

import { TodoProvider} from '../TodoContext'

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Cortar tomate', completed: false },
//   { text: 'Cortar pepino', completed: false },
//   { text: 'Cortar aguacate', completed: false },
// ]



function App(props) {

  return (
    <TodoProvider>
    <AppUI/>
    </TodoProvider>
  );


}

export default App;
