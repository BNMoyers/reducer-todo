import React, { useState, useReducer } from 'react';
import { initialState, reducer } from './reducers/Reducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const addTask = task => {
    dispatch({ type: 'ADD_TODO', payload: task})
  }

  const toggleTask = id => {
    dispatch({ type: 'TOGGLE_TODO', payload: id})
  }

  const clearCompleted = () => {
    dispatch({type: 'CLEAR_COMPLETED'})
  }

  return (
    <>
    <h1>Welcome to your To-Do App!</h1>
    <div className='todo-box'>
      <TodoForm addTask={addTask}/>
      <TodoList tasks={state.todoArray}
                      toggleTask = {toggleTask}
                      clearCompleted = {clearCompleted} />
    </div>
    </>
  );
}

export default App;
