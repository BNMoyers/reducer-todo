import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [task, setTask] = useState('');
    const handleChange = event => setTask(event.target.value);
    const handleSubmit = event => {
        event.preventDefault();
        addTodo(task);
        setTask('');
    }
    return (
        <form>
            <input type='text'
                   name='task' 
                   placeholder='to-do' 
                   onChange={handleChange}/>
            <button type='submit'>Add To-do</button>
        </form>
    )
}

export default TodoForm