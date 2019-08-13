
export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    editing: false,
    id: 3892987589
}

// actions = TOGGLE_TASK, ADD_TASK, CLEAR_COMPLETED

export const todoReducer = (state, action) => {
    switch (action.type){
        case 'TOGGLE_EDITING':
            return{
                ...state,
                editing: !state.editing
            };
        case 'UPDATE_TASK':
            return{
                ...state,
                item: action.payload,
                editing: !state.editing
            } ;
        case 'TOGGLE_COMPLETED':
            return{
                ...state,
                completed: !state.completed

                    } ;
        case 'ADD_TASK':
            return{
                
                            } ;

        case 'CLEAR_COMPLETED':
            return{

            } ;
            default:
                return state;
}
