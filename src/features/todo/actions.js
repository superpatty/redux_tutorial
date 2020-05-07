/**
  * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
    other constants
 */
export const VisibilityFilters = {
    SHOW_ALL : 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
    action creators
 */

export function addToDo(text) {
    return { type: ADD_TODO, text};
}

export function toggleToDo(index) {
    return { type: TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter };
}

// example app state
// {
//     visbilityFilter: 'SHOW_ALL',
//     todos: [
//         {
//             text: 'Consider using Redux',
//             completed: true
//         },
//         {
//             text: 'Keep all state in a single tree',
//             completed: false,
//         }
//     ]
// }

