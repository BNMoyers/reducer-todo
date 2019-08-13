import React, { useState, useReducer } from 'react';

import { initialState, todoReducer } from '../../reducers/Reducer'

const Todo = () => {
  const [newTodoText, setNewTodoText] = useState();
  
  const [state, dispatch] = useReducer(todoReducer, initialState);
  
  

  return(
      <div className ={`${props.task.completed ? 'completed' : ''}`} 
            onClick={() => props.toggleTask(props.task.id)} >
          <li>{props.task.task}</li>
      </div>
    );
};

export default Todo