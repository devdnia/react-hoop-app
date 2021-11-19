import React from 'react'
import PropTypes from 'prop-types';

export const TodoListItem = ( {todo, index, handleDelete, handleToogle} ) => {
    return (
        <li
             key={ todo.id }
             className='list-group-item'
        > 
             <p 
                className={ `${ todo.done && 'complete'}`}
                onClick={ () => handleToogle( todo.id ) }
             >
                { index + 1}. { todo.desc}
             </p>
             <button
                 className='btn btn-danger'
                 onClick={ () => handleDelete(todo.id) }
             >
             
                 Borrar
             </button>
        </li>

    )
}

TodoListItem.PropTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToogle: PropTypes.func.isRequired
}