/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit"


export const getTodosAsync = createAsyncThunk("todos/getTodosAsync", async () => {
    const res = await fetch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`)
    return res.json();
})

export const postTodoAsync = createAsyncThunk("todos/postTodoAsync", async (data) => {
    const res = await fetch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    return res.json()

})

export const toggleTodosAsync = createAsyncThunk("todos/toggleTodosAsync", async ({ id, data }) => {
    const res = await fetch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    return res.json()
})

export const deleteTodosAsync = createAsyncThunk("todos/deleteTodosAsync", async (id) => {
    const res = await fetch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`, { method: "DELETE" })

    return id

})

export const deleteAllCmpTodosAsync = createAsyncThunk("todos/deleteAllCmpTodosAsync", async () => {
    const res = await fetch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/` ,{ method: "PUT" })
    return res.json()
})
