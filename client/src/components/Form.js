import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postTodoAsync } from "../redux/todos/todosSlice";
import Loading from "./Loading";
import Errors from "./Erors";

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const loading = useSelector((state) => state.todoReducer.addTodo.isLoading);
  const error = useSelector((state) => state.todoReducer.addTodo.error);

  // Add todo

  const handleSubmit = (e) => {
    e.preventDefault();

    title && dispatch(postTodoAsync({ title }));

    setTitle("");
  };

  return (
    <div>
      <form
        style={{ display: "flex", alignItems: "center", paddingRight: 17 }}
        onSubmit={handleSubmit}
      >
        <input
          disabled={loading}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {loading && <Loading />}
        {error && <Errors message={error} />}
      </form>
    </div>
  );
};

export default Form;
