import React from "react";
import { TodoCounter } from '../TodoCounter'
import { TodoContext } from "../TodoContext";
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import {Modal} from '../Modal'
import { TodoForm } from "../TodoForm";

function AppUI() {
  const { error,
    loading,
    searchTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter
      />
      <TodoSearch
      />
      
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

          </TodoList>
          {!!openModal && (
            <Modal>
            <TodoForm/>
          </Modal>
          ) }
      <CreateTodoButton 
      setOpenModal = {setOpenModal}
      openModal = {openModal}/>

    </React.Fragment>


  );
}

export { AppUI };