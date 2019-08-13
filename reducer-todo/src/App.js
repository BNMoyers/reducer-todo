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



// actions = TOGGLE_TASK, ADD_TASK, CLEAR_COMPLETED

//toggleTask = id => {
//   this.setState({
// todos: this.state.todos.map(task => {
//       if (task.id === id) {
//          return {
//           ...task,
//           completed: !task.completed
//          };
//     } else {
//         return task;
//       }
//     })
//   });
// };

// addTask = taskName => {
//   const newTask = {
//     task: taskName,
//     id: Date.now(),
//     completed: false
//   }
//   this.setState({
//     todos: [...this.state.todos, newTask]
//   })
// }

// clearCompleted = () => {
//   this.setState({
//     todos: this.state.todos.filter(task => !task.completed)
//   })
 


  
   
  
}

export default App;
