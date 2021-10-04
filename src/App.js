
// import './App.css';

import React from "react";
import {TodoCounter} from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList'
import {TodoItem} from './TodoItem'
import {CreateTodoButton} from './CreateTodoButton'
const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Cortar tomate', completed: false },
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

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed =!newTodos[todoIndex].completed;
    // todos[todoIndex] = {
    //   text:todos[todoIndex].text,
    //   completed:true,
    // }
    setTodos(newTodos);
  }

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
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
          <TodoItem 
          key={todo.text} 
          text= {todo.text}
           completed = {todo.completed} 
           onComplete = {() => completeTodos(todo.text)} 
           onDelete = {() => deleteTodos(todo.text)}/>
 ))}

      </TodoList>
      <CreateTodoButton />

    </React.Fragment>


  );
}

export default App;
