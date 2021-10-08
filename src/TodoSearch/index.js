import React from 'react';
import './TodoSearch.css'
import { TodoContext } from "../TodoContext";

function TodoSearch() {

    const {searchValue, setSearchValue} = React.useContext(TodoContext);


    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return(
        <input className='TodoSearch'
        onChange={onSearchValueChange}
        value={searchValue}
        placeholder="Search for a TODO..." />
    )
    
}

export {TodoSearch};