import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from './reducers/Reducer'
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';


const  App = (props) => {
  
  return (
    <div className = 'app'>
      <h1>Get SHIFT Done</h1>
      <TodoList />
      <TodoForm />
    </div>
  );

  
}

export default App;
