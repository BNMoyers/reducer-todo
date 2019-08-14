import React from 'react';



const TodoList = ({ todoArray, toggleTodo }) => {

    return(
       <div className='todo-list'>
         {todoArray.map(todo => 
         (<div key={todo.id}
          onClick={()=> toggleTodo(todo.id)}
           className={todo.completed ? "completed" : ""}>
           {todo.task}

           </div>
           ))}
       </div>
   ); 
}

export default TodoList;