import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "@reduxjs/toolkit"
import { getTodosAsync, postTodoAsync, toggleTodosAsync, deleteTodosAsync, deleteAllCmpTodosAsync } from "./services"





export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        items: [

        ],
        activeFilter: localStorage.getItem("selected") || "all",
        isLoading: false,
        error: null,
        addTodo: {
            isLoading: false,
            error: null
        }
    },
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                // state.items = [...state.items, action.payload]
                // state.items.push(action.payload)
            },

            prepare: ({ title }) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        completed: false,

                    }
                }

            }
        },

        toggleCompleted: (state, action) => {

            // const item = state.items.find(item => item.id === action.payload)
            // item.completed = !item.completed

        },

        removeTodo: (state, action) => {
            const filteredItems = state.items.filter(item => item.id !== action.payload)

            state.items = filteredItems
        },

        filterTodos: (state, action) => {

            state.activeFilter = action.payload

            localStorage.setItem("selected", action.payload)


        },

        removeCompleted: (state, action) => {
            state.items = state.items.filter(item => item.completed === false)

        }

    },
    extraReducers: {

        // GET

        [getTodosAsync.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getTodosAsync.fulfilled]: (state, action) => {
            state.items = action.payload
            state.isLoading = false
        },
        [getTodosAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message
        },

        // POST

        [postTodoAsync.pending]: (state, action) => {
            state.addTodo.isLoading = true;
        },
        [postTodoAsync.fulfilled]: (state, action) => {
            state.items.push(action.payload)
            state.addTodo.isLoading = false
        },
        [postTodoAsync.rejected]: (state, action) => {
            state.addTodo.isLoading = false;
            state.addTodo.error = action.error.message
        },

        // PATCH


        [toggleTodosAsync.fulfilled]: (state, action) => {


            const { id, completed } = action.payload

            const index = state.items.findIndex(item => item.id === id)

            state.items[index].completed = completed



        },

        // DELETE

        [deleteTodosAsync.fulfilled]: (state, action) => {


            const index = state.items.findIndex(item => item.id === action.payload)

            state.items.splice(index, 1)


        },

        // DELETE COMPLETED

        [deleteAllCmpTodosAsync.fulfilled]: (state, action) => {

            state.items = state.items.filter(item => item.completed === false)


        }

    }


})


export const todos = (state) => state.todoReducer.items
export const activeFilter = (state) => state.todoReducer.activeFilter
export const filtredTodos = (state) => {
    if (state.todoReducer.activeFilter === "all") {
        return state.todoReducer.items

    }
    else {
        return (
            state.todoReducer.items.filter(todo =>
                state.todoReducer.activeFilter === "active"
                    ? todo.completed === false
                    : todo.completed === true)
        )
    }


}

export const todoReducer = todoSlice.reducer
export const { toggleCompleted, removeTodo, filterTodos, removeCompleted, } = todoSlice.actions
export { getTodosAsync, postTodoAsync, toggleTodosAsync, deleteTodosAsync, deleteAllCmpTodosAsync }