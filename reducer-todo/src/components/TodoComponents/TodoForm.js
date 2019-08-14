import React, { useState } from 'react';

const TodoForm = ({ addTodo, clearCompleted }) => {
    const [task, setTask] = useState('');
    const handleChange = event => setTask(event.target.value);
    const handleSubmit = event => {
        event.preventDefault();
        addTodo(task);
        setTask('');
    }

const handleClear = event => {
    event.preventDefault();
    clearCompleted();
};    

    return (
        <form onSubmit={handleSubmit}>
            <input type='text'
                   name='task' 
                   placeholder='to-do' 
                   value={task}
                   onChange={handleChange}/>
            <button type='submit'>Add To-do</button>
            <button onClick={handleClear}>Clear Completed</button>
        </form>
    )
}

export default TodoForm