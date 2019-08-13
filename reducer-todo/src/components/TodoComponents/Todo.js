import React, { useState, useReducer } from 'react';

import { initialState, todoReducer } from '../../reducers/Reducer'

const Todo = () => {
  const [newTodoText, setNewTodoText] = useState();
  
  const [state, dispatch] = useReducer(todoReducer, initialState);
  
 


  return(
      <div className ={`${state.completed ? 'completed' : ''}`} 
            onClick={() => dispatch({ type: 'TOGGLE_EDITING' })} >
          <li>{state.task}</li>
      </div>
    );
};

export default Todo