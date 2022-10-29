import React, { useState } from 'react'


export default function Todo() {

    const [todos, setTodos] = useState([{ id: 1, name: 'todo1', change: false }])
    const [todo, setTodo] = useState([{ id: '', name: '', change: false }])

//     const handleEventAddTodo = (inputTodo) => {
//         newtodos = { ...todos, { id:}
//     console.log(newtodo)
//     setTodos(newtodos)
// }

const handleEventAddTodo = (inputTodo) => {
    let newtodos = [...todos, { id: todos.lentgh + 1, name: inputTodo, change: false }]
    console.log(newtodos)
    setTodos(newtodos)
}

const handleEventOnChangeInput = (event) => {
    setTodo(event.target.value)
}
return (
    <div>
        <p>ListTodo</p>
        <ol>
            {todos.map((todo) => (<li key={todo.id}> {todo.name}</li>))}
        </ol>
        <div>
            <input type='text' placeholder='insert todo add' key={todo.key} onChange={handleEventOnChangeInput}>{todo.name}</input>
            <button onClick={handleEventAddTodo}>Add Todo</button>
        </div>
    </div>
)
}