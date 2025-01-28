import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import TodoHead from "../TodoHead";
import TodoList from "../TodoList";
import TodoCreate from "../TodoCreate";
import DummyData from "../../data/dummy.json";
import CalenderIcon from "../../assets/calendar.png";
import { format } from "date-fns";

const TodoTemplate = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const today = format(new Date(), "yyyy-MM-dd");
    const todosToday = DummyData.filter((todo) => todo.date == today);
    setTodos(todosToday);
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
      date: format(new Date(), "yyyy-MM-dd"),
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
    <>
      <TodoHead todos={todos} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      <TodoCreate onCreate={onCreate} />
      <Link to="/calendar">
        <img
          src={CalenderIcon}
          className="absolute w-15 right-8 bottom-10 opacity-20 hover:opacity-100 transition-opacity duration-120"
        />
      </Link>
    </>
  );
};

export default TodoTemplate;
