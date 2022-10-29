import React from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo'
import {useState} from 'react'

export default function Todos() {
    const [todos, setTodos] = useState([{ id: 1, name: 'todo1', change: false }])
    const [todo, setTodo] = useState([{ id: null, name: '', change: false }])

    function handleEventAddTodo()  {
        // { id: todos.lentgh + 1, name: inputTodo, change: false }
        let newtodos = [...todos,...todo]
        console.log(newtodos)
        setTodos(newtodos)
    }

    const findArrayElementByTitle = (array, title) => {
        return array.find(
            (element) => {
                return element.title === title;
            })
    }

    function handleEventDelTodo(todoId) {
        console.log(todoId)
        let arrayTemp = [...todos];
        var index = arrayTemp.find(
            (element) => {
                return element.id === todoId;
            })
            console.log('index',index)
        if (index !== -1) {
            //arrayTemp.slice(index,1);
             arrayTemp.splice(index,1);
            //console.log(arrayTemp)
            setTodos( s=> [...s, arrayTemp] )
            setTodo('')
        }
    }

    function retMaxId() {
        var maxId=1;
        todos.map( (t) => {  
            if  (t.id >= maxId )
                 maxId = t.id;
        } )
        return maxId+1;
    } 
    const handleEventOnChangeInput = (event) => {
        console.log(' todo ' ,todo)
        console.log( ' event.target.value ' , event.target.value)
        let newId = retMaxId();//todos.length + 1;
        let newName = event.target.value;
        setTodo([{ id:newId, name: newName, change: false }])

    }

    return (
        <div>
            <p>TodoS</p>
            <hr></hr>
            {/* <AddTodo todoprops={todos}></AddTodo> */}
            <hr></hr>
            {todos.map(
                (todoElement) => {
                    return (<Todo todoprops={todoElement} key={todoElement.id}
                        propshandleEventAdd={handleEventAddTodo}
                        propshandleEventDel={(todoId) => { handleEventDelTodo(todoElement.id) }}
                    />)
                })}

            <ol>
                {todos.map((todoEl) => (<li key={todoEl.id}> {todoEl.name}</li>))}
            </ol>
            <hr></hr>
            <div>
                <input type='text' placeholder='insert todo' key={todo.key} onChange={handleEventOnChangeInput}>{todo.name}</input>
                <button onClick={handleEventAddTodo}>Add Todo</button>
            </div>
        </div>
    )
}
