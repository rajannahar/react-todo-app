import React from 'react'

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length
        ? (todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content} </span> 
                    <a className="btn" onClick={() => {deleteTodo(todo.id)}}>x</a>
                </div>
            )
        }))
        : (<p className="center">You have no todo's left!</p>)    

    return (
    <div className="todos collection">
        {todoList}
    </div>
    )
}

export default Todos;