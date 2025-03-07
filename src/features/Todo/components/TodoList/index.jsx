import React from 'react';
import "./style.css"

function TodoList(props) {

    const { listTodo } = props;

    return(
        <>
            <ul>
                {listTodo.map((todo, index) => (
                    <li key={index}>{todo.title}</li>
                ))}
            </ul>
        </>
    )
}

export default TodoList;