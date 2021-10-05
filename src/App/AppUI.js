import React from "react";
import { TodoCounter } from '../TodoCounter'
import { TodoContext } from "../TodoContext";
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'


function AppUI() {
  return (
    <React.Fragment>
      <TodoCounter
      />
      <TodoSearch
      />
      <TodoContext.Consumer>
        {({ error,
          loading,
          searchTodos,
          completeTodos,
          deleteTodos
        }) => (
          <TodoList>
            {error && <p> Hubo un error</p>}
            {loading && <p> Estamos cargando</p>}
            {(!loading && searchTodos.lenght === 0) && <p> Crea un TODO</p>}
            {searchTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodos(todo.text)}
                onDelete={() => deleteTodos(todo.text)} />
            ))}

          </TodoList>)
        }
      </TodoContext.Consumer>
      <CreateTodoButton />

    </React.Fragment>


  );
}

export { AppUI };