import React, { useState } from 'react';
import TodoList from "./components/TodoList";
import todoList from "./components/TodoList";

function Todo() {
    const initialTodos = [
        { id: 1, title: 'Eat', status: 'new' },
        { id: 2, title: 'Learn', status: 'new' },
        { id: 3, title: 'Great', status: 'new' }
    ];

    const [listTodo, setListTodo] = useState(initialTodos);
    const [filter, setFilter] = useState('all');

    const handleTodoClick = (todo, index) => {
        console.log(todo, index);
        const newTodos = [...listTodo];

        newTodos[index] = { ...newTodos[index],
            status: newTodos[index].status === "new" ? "complete" : "new"
        }

        setListTodo(newTodos)
    };

    const handleShowAll = () => {
        setFilter('all')
    }

    const handelShowComplete = () => {
        setFilter('complete')
    }

    const handleShowNew = () => {
        setFilter('new')
    }

    const renderTodoList = listTodo.filter(todo => filter === "all" || filter === todo.status)


    return (
        <>
            <TodoList listTodo={renderTodoList} onTodoClick={handleTodoClick}/>

            <div>
                <button onClick={handleShowAll}>Show all</button>
                <button onClick={handelShowComplete}>Show complete</button>
                <button onClick={handleShowNew}>Show new</button>
            </div>
        </>
    );
}

export default Todo;
