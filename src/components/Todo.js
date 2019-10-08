import React from 'react';

const Todo = (props) =>{
    return(
        <div>
             <li className={`${props.task.completed ? 'completed' : ''}`}
            onClick={()=> props.toggleTask(props.task.id)} >{props.task.task}</li>
        </div>
    )
}

export default Todo