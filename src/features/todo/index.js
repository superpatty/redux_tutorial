import { createStore } from 'redux'

import TodoApp from './reducers'

const store = createStore(TodoApp, window.STATE_FROM_SERVER)

import {
    addToDo,
    toggleToDo,
    setVisibilityFilter,
    VisibilityFilters
} from "./actions"

console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(addTodo('Learn about actions'))
store.dispatch(addToDo('Learn about reducers'))
store.dispatch(addToDo('Learn about store'))
store.dispatch(toggleToDo(0))
store.dispatch(toggleToDo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
store.dispatch(toggleToDo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))

unsubscribe()