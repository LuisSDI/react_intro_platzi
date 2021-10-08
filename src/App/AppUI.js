import React from "react";
import { TodoCounter } from '../TodoCounter'
import { TodoContext } from "../TodoContext";
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import {Modal} from '../Modal'
import { TodoForm } from "../TodoForm";
import {LoadingComponent} from '../LoadingComponent'
import "./App.css"

function AppUI() {
  const { error,
    loading,
    searchTodos,
    completeTodos,
    totalTodos,
    deleteTodos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  
    return (
    <React.Fragment>
      <TodoCounter
      />
      <TodoSearch
      />
      
          <TodoList>
          {loading &&
            <LoadingComponent/>}
            {(!loading &&  totalTodos < 1) && <p
            className="TODOEmpty"
            >You dont have any TODO<br/> make a new one</p>}
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
          ) }{!error && !loading &&

      <CreateTodoButton 
      setOpenModal = {setOpenModal}
      openModal = {openModal}/>}

    </React.Fragment>


  );
}

export { AppUI };