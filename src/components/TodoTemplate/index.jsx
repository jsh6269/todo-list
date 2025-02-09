import TodoList from "../TodoList";
import TodoHead from "../TodoHead";
import TodoCreate from "../TodoCreate";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CalenderIcon from "../../assets/calendar.png";
import { getTodos, toggleTodoDone, deleteTodo, createTodo } from "./api";

const TodoTemplate = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const todoResponse = await getTodos();
    setTodos(todoResponse);
  };

  const handleToggle = async (id) => {
    try {
      await toggleTodoDone(id);
      const newTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
      setTodos(newTodos);
    } catch (e) {
      console.error(e);
    }
  };

  const handleRemove = async (id) => {
    try {
      await deleteTodo(id);
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    } catch (e) {
      console.error(e);
    }
  };

  const handleCreate = async (text) => {
    try {
      const newTodo = await createTodo(text);
      setTodos([...todos, newTodo]);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <TodoHead todos={todos} />
      <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
      <TodoCreate onCreate={handleCreate} />
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
