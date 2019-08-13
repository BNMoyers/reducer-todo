import React, { useReducer } from 'react';
import Todo from './Todo';
import { todoReducer, initialState} from '../../reducers/Reducer'



const TodoList = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState);

    return(
       <div className='todo-list'>
           <ul>
               {state.items.map(todo => {
               return <Todo todo={todo}/>
               })}
           </ul>
           <button className='clear-finished' >Clear Finished</button>
       </div>
   ); 
}

export default TodoList;