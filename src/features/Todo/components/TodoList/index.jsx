import React from 'react';
import "./style.css";
import classnames from "classnames";

function TodoList({ listTodo, onTodoClick }) {
    const handleTodoClick = (todo, index) => {
        if (onTodoClick) {
            onTodoClick(todo, index);
        }
    };

    return (
        <ul>
            {listTodo.map((todo, index) => (
                <li
                    key={todo.id}
                    onClick={() => handleTodoClick(todo, index)}
                    className={classnames({ complete: todo.status === "complete", 'todo-item': true })}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
