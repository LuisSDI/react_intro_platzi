
// import './App.css';

import React from "react";
import {TodoCounter} from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList'
import {TodoItem} from './TodoItem'
import {CreateTodoButton} from './CreateTodoButton'
const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Cortar tomate', completed: true },
  { text: 'Cortar pepino', completed: false },
  { text: 'Cortar aguacate', completed: false },
]


function App(props) {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchTodos = [];
  if (!searchValue >=1) {
    searchTodos = todos
  }
  else{
    searchTodos = todos.filter( todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
    
  }


  return (
    <React.Fragment>
      <TodoCounter 
      total={totalTodos}
      completed={completedTodos}
      />
      <TodoSearch
      searchValue = {searchValue}
      setSearchValue = {setSearchValue} 
      />
      <TodoList>
        {searchTodos.map(todo => (
          <TodoItem key={todo.text} text= {todo.text} completed = {todo.completed} />
        ))}

      </TodoList>
      <CreateTodoButton />

    </React.Fragment>


  );
}

export default App;
