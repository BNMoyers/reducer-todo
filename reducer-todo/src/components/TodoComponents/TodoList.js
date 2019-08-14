import React from 'react';



const TodoList = ({ todoArray, toggleTodo }) => {

    return(
       <div className='todo-list'>
         <ul>{todoArray.map(todo =>
         (<li key={todo.id}
         onClick={()=> toggleTodo(todo.id)}
         className={todo.completed ? "completed" : ""}>
         {todo.task}
         </li>
        
         ))}</ul>
       </div>
   ); 
}

export default TodoList;