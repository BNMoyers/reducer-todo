
export const initialState = {
    todoArray: [
        {
    task:'Learn about reducers',
    completed: false,
    editing: false,
    id: 1111111
    }
],
};

// actions = TOGGLE_TASK, ADD_TASK, CLEAR_COMPLETED

export const todoReducer = (state, action) => {
   
    switch (action.type){
        
        case 'TOGGLE_TODO':
            return{
                ...state,
                todoArray: state.todoArray.map(todo => {
                    if (todo.id === action.payload) {
                        return{
                            ...todo,
                            completed: !todo.completed
                    };
                }else{
                        return todo;
                    }
                })
                

                    } ;
        case 'ADD_TODO':
            return{
                ...state,
                todoArray: [...state.todoArray, {
                    task: action.payload,
                    completed: false,
                    id: Date.now()
                }]
                            } ;

        case 'CLEAR_COMPLETED':
            return{
                ...state,
                todoArray: state.todoArray.filter(todo => {
                    return !todo.completed;
                })
            } ;
            default:
                return state;
}}
