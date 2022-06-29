
export const todoReducer = (initialState = [], action = {}) => {

    switch(action.type) {
        case 'ADD_TODO':
            return [...initialState, action.payload];
            
        case 'DELETE_TODO':
            return initialState.filter(todo => todo.id !== action.payload);

        case 'TOGGLE_TODO':
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            } );
        
        case 'TRUE_TODO':
         return initialState.filter(todo => todo.done === true);
         
        case 'FALSE_TODO':
            return initialState.filter(todo => todo.done === false);

        }
           
}