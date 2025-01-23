import { useState, useEffect } from "react";
// import axios from "axios";
import TodoHead from "../TodoHead";
import TodoList from "../TodoList";
import TodoCreate from "../TodoCreate";
import DummyData from "../../data/dummy.json";

const TodoTemplate = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(DummyData);
    // axios
    //   .get("/api/todos")
    //   .then((res) => {
    //     setTodos(res.data.todos);
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  const onToggle = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  const onRemove = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    // axios
    //   .delete(`/api/todos/${id}/`)
    //   .then((res) => {
    //     const newTodos = todos.filter((todo) => todo.id !== id);
    //     setTodos(newTodos);
    //   })
    //   .catch((err) => console.log(err));
  };

  const onCreate = (text) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 0;

    const newTodo = {
      id: lastId + 1,
      text: text,
      done: false,
    };

    setTodos([...todos, newTodo]);

    // const newTodo = { text };
    // axios
    //   .post("/api/todos/create/", newTodo)
    //   .then((res) => {
    //     setTodos([...todos, res.data.todo]);
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="template-container">
      <TodoHead todos={todos} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      <TodoCreate onCreate={onCreate} />
    </div>
  );
};

export default TodoTemplate;
