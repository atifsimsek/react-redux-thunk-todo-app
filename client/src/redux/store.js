import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { todoReducer } from "./todos/todosSlice"



const rootreducer = combineReducers({

    todoReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootreducer
    })
}