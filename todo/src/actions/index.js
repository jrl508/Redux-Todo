export const ADD_TODO = 'ADD_TODO';
export const addTodo = newTodo =>{
    console.log(newTodo);
    return{
        type: ADD_TODO,
        payload: newTodo
    };
};

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = index => {
    console.log(index);
    return {
        type:TOGGLE_TODO,
        payload: index
    }
}