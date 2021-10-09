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
        >
            <div>
                <PlusSVG fill="white"
        
        className="PlusSVG">

        </PlusSVG></div>
        </button>
    )
    
}

export {CreateTodoButton};