import React, { useState, useReducer } from 'react';

import { initialState, todoReducer } from '../../reducers/Reducer'

const Todo = ({todo}) => {

  const [state, dispatch] = useReducer(todoReducer, initialState);
  
 
  console.log(state);

  return(
      
          <li>{todo.task}</li>
  
    );
};

export default Todo