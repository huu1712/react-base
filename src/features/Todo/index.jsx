import React from 'react';
import TodoList from "./components/TodoList";

function Todo() {

    const listTodo = [
        {
            id: 1,
            title: 'Eat'
        },
        {
            id: 2,
            title: 'Learn'
        },
        {
            id: 3,
            title: 'Great'
        }
    ]

    return (
        <>
            <TodoList listTodo={listTodo}/>
        </>
    )
}

export default Todo;