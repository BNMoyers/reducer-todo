import React, { useReducer } from 'react';
import { initialState, todoReducer } from './reducers'
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';


const  App = (props) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = task => {
    dispatch({ type: 'ADD_TODO', payload: task})
  }
  return (
    <div className = 'app'>
      <h1>Get SHIFT Done</h1>
      <TodoList itemsArray={state.itemsArray}/>
      <TodoForm addTodo={addTodo}/>
    </div>
  );

  
}

export default App;
