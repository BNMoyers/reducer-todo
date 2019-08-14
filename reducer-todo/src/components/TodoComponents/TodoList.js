import React, { useReducer } from 'react';
import Todo from './Todo';
import { todoReducer, initialState} from '../../reducers'



const TodoList = ({ itemsArray }) => {

    return(
       <div className='todo-list'>
         {itemsArray.map(task => <div key={task.item}></div>)}
       </div>
   ); 
}

export default TodoList;