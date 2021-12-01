import React from 'react'
import PropTypes from 'prop-types';
import { TodoListItem } from './TodoListItem'

export const TodoList = ( {todos, handleDelete, handleToogle}) => {
    return (
        <ul className='list-group list-group-flush'>
            {
                todos.map( ( todo, i ) =>(
                    <TodoListItem 
                    key={ todo.id }
                    todo={ todo }
                    index={ i }
                    handleDelete={ handleDelete}
                    handleToogle={ handleToogle }
                />
                ))
            }    
        </ul>
    )
}

TodoList.propTypes = {
    todos        : PropTypes.array.isRequired,
    handleDelete : PropTypes.func.isRequired,
    handleToogle : PropTypes.func.isRequired, 

}