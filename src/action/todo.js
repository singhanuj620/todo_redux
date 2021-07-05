import { ADD_TODO, REMOVE_TODO } from './action-types'

// "type" - compulsory
// "payload / data" - optional

export const addTodo = todo => ({
    type: ADD_TODO,
    payload: todo
});

export const removeTodo = id => ({
    type: REMOVE_TODO,
    payload: id
});