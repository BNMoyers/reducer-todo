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

  const toggleTodo = id => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  }

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED'});
  }
  return (
    <div className = 'app'>
      <h1>Get SHIFT Done</h1>
      <TodoList todoArray={state.todoArray} toggleTodo={toggleTodo}/>
      <TodoForm addTodo={addTodo}  clearCompleted={clearCompleted}/>
    </div>
  );

  
}

export default App;
