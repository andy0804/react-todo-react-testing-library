import React, { useState } from 'react'
import "./AddInput.css"
import { v4 } from "uuid"
import TodoList from '../TodoList/TodoList'

function AddInput({
    setTodos, todos
}) {

    const [todo, setTodo] = useState("")

    const addTodo = () => {
        let updatedTodos = [
            ...todos,
            {
                id: v4(),
                task: todo,
                completed: false
            }
        ]
        setTodos(updatedTodos);
        setTodo("")
    }
    const handleKeyDown =(event) =>{
        if(event.keyCode === 13) { 
            console.log('Enter key pressed')
            addTodo();
      }

    }
    return (
        <div className="input-container">
            <input
               onKeyDown={handleKeyDown} 
                data-test='new-todo'
                className="input" 
                value={todo} 
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add a new task here..."
            />
            <button 
                className="add-btn"
                onClick={addTodo}
            >
                Add
            </button>
        </div>
    )
}

export default AddInput
