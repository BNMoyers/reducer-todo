import React, { useState } from 'react';

const TodoForm = ({ addTask }) =>{
   const [task, setTask] = useState('');
   
   const handleChange = e => setTask(e.target.value);

   const handleSubmit = e => {
       e.preventDefault();
       addTask(task);
       setTask('');
   }



   return(
    <> <form onSubmit={handleSubmit}>
    <input type='text'
     value={task}
     name='task'
     onChange={handleChange}
     />
<button type='submit'>add todo</button>
</form>
</> 
   )
}

export default TodoForm;