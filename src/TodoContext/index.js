import React from 'react';
import { useLocalStorage } from "./useLocalStorage.js"

const TodoContext = React.createContext();

function TodoProvider(props) {

    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);


    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchTodos = [];
    if (!searchValue >= 1) {
        searchTodos = todos
    }
    else {
        searchTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        })

    }




    const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        // todos[todoIndex] = {
        //   text:todos[todoIndex].text,
        //   completed:true,
        // }
        saveTodos(newTodos);
    }

    const deleteTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    // console.log('Antes del use effect');
    // React.useEffect(()=>{
    //   console.log('use effect');
    // }, [totalTodos]);
    // console.log('Despues del use effect');



    return (
        <TodoContext.Provider
            value={{
                loading,
                error,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                searchTodos,
                completeTodos,
                deleteTodos,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );

}

export {TodoContext , TodoProvider};