import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterTodos,
  removeCompleted,
  activeFilter,
  deleteAllCmpTodosAsync,
} from "../redux/todos/todosSlice";

const ContentFooter = () => {
  // Filter todos

  const dispatch = useDispatch();

  const items = useSelector((state) => state.todoReducer.items);
  const itemsLeft = items.filter((item) => !item.completed).length;

  const selected = useSelector(activeFilter);

  const clearHandle = async () => {
    window.confirm("Are you sure you want to delete all completed todos ?") &&
      (await dispatch(deleteAllCmpTodosAsync()));
  };

  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{itemsLeft}</strong> {itemsLeft > 1 ? "items" : "item"} left
        </span>

        <ul className="filters">
          <li>
            <a
              href="#/"
              onClick={() => {
                dispatch(filterTodos("all"));
              }}
              className={selected === "all" ? "selected" : ""}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/"
              onClick={() => {
                dispatch(filterTodos("active"));
              }}
              className={selected === "active" ? "selected" : ""}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/"
              onClick={() => {
                dispatch(filterTodos("completed"));
              }}
              className={selected === "completed" ? "selected" : ""}
            >
              Completed
            </a>
          </li>
        </ul>

        <button
          onClick={() => {
            clearHandle();
          }}
          className="clear-completed"
        >
          Clear completed
        </button>
      </footer>
    </div>
  );
};

export default ContentFooter;
