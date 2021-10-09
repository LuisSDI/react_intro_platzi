import React from 'react';
import './CreateTodoButton.css'
import { ReactComponent as PlusSVG } from './plus.svg';

function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(!props.openModal)
    }
    return(
        <button 
        className='CreateTodoButton'
        onClick = {() => onClickButton()}
        ><PlusSVG fill="white">

        </PlusSVG>
        </button>
    )
    
}

export {CreateTodoButton};