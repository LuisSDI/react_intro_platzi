import React from 'react';
import './TodoItem.css';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import { AiFillCheckCircle } from 'react-icons/ai'

function TodoItem(props) {

  let checkColor = "gray";

  if (props.completed) {
    checkColor = "green";
  }

  return (
    <li className="TodoItem">
      <AiFillCheckCircle
        size={30}
        color={checkColor}
        onClick={props.onComplete}
        className="Test"
      />

      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  )

}

export { TodoItem };