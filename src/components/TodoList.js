import React from 'react';
import Todo from './Todo'

const TodoList = props =>{
    console.log(props)
    return(
        <>
          <h2>To-Dos:</h2>
           <ul>
               {props.tasks.map(task =>
                <Todo task={task}
                        key={task.id}
                        toggleTask={props.toggleTask}/>)}
           </ul>
           <button onClick={props.clearCompleted}>Clear Completed</button>
        </>
    )
}
export default TodoList