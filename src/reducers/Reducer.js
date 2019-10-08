export const initialState =  {
    todoArray: [
        {
    task: 'Learn about reducers',
    completed: false,
    id: 3892987589
}
],
};

export const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TASK':
            return {
                ...state,
                todoArray: [...state.todoArray,{
                task: action.payload,
                completed: false,
                id: Date.now()
                }]
            };
         case 'TOGGLE_TODO':
             return {
                 ...state,
                todoArray: state.todoArray.map(task =>{
                    if(task.id === action.payload){
                        return{
                            ...task,
                            completed: !task.completed
                        };
                    } return task;
                })
                };
         case 'CLEAR_COMPLETED':
             return {
                 ...state,
                 todoArray: state.todoArray.filter(
                     task=> !task.completed)
             }       
        default:
            return state;
    }
}