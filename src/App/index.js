
// import './App.css';

import React from "react";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Cortar tomate', completed: false },
//   { text: 'Cortar pepino', completed: false },
//   { text: 'Cortar aguacate', completed: false },
// ]

function useLocalStorage(itemName, initialValue){

  

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = React.useState(parsedItem);
  const saveItem = (newItem) => {
    localStorage.setItem(itemName,JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item,saveItem];
}


function App(props) {

  const [todos , saveTodos] = useLocalStorage('TODOS_V1',[]);


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
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed =!newTodos[todoIndex].completed;
    // todos[todoIndex] = {
    //   text:todos[todoIndex].text,
    //   completed:true,
    // }
    saveTodos(newTodos);
  }

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }

  return(
    <AppUI
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue = {searchValue}
    setSearchValue = {setSearchValue} 
    searchTodos = {searchTodos} 
    completeTodos = {completeTodos}
    deleteTodos = {deleteTodos}
    />
  );

 
}

export default App;
