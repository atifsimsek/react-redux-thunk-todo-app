import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { filtredTodos, getTodosAsync, toggleTodosAsync, deleteTodosAsync } from '../redux/todos/todosSlice'
import Erors from './Erors'
import Loading from './Loading'


const TodoList = () => {


    const loading = useSelector(state => state.todoReducer.isLoading)
    const error = useSelector(state => state.todoReducer.error)

    const dispatch = useDispatch()
    const filtredItems = useSelector(filtredTodos)

    const handleRemove = async (id) => {

        window.confirm("Are you sure you want to delete todo ?") && await dispatch(deleteTodosAsync(id))

    }

    //GET todos

    useEffect(() => {
        dispatch(getTodosAsync())
    }, [dispatch])


    //Updata todos(completed )

    const handleToggle = async (id, completed) => {

        await dispatch(toggleTodosAsync({ id, data: { completed } }))

    }

    //Loading proceses


    if (loading) {

        return (
            <Loading />
        )
    }

    if (error) {

        return (
            <Erors message={error} />
        )
    }

    return (
        <div>
            <ul className="todo-list">
                {/* <li className="completed">
                    <div className="view">
                        <input className="toggle" type="checkbox" />
                        <label>Learn JavaScript</label>
                        <button className="destroy"></button>
                    </div>
                </li> */}


                {/* Listing todos */}

                {
                    filtredItems.map(item => (
                        <li key={item.id} className={item.completed ? "completed" : ""}>
                            <div className="view">
                                <input
                                    checked={item.completed}
                                    onChange={() => { handleToggle(item.id, !item.completed) }}
                                    className="toggle"
                                    type="checkbox"
                                />
                                <label>{item.title}</label>
                                <button onClick={() => { handleRemove(item.id) }} className="destroy"></button>

                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList