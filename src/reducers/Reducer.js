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
        case 'ADD_TODO':
            const newTask = {
                task: action.payload,
                completed: false,
                id: Date.now()

            }
        default:
            return state;
    }
}