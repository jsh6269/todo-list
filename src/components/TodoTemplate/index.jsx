import TodoList from "../TodoList";
import TodoDummyData from "../../data/dummy.json";
import TodoHead from "../TodoHead";
import TodoCreate from "../TodoCreate";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CalenderIcon from "../../assets/calendar.png";

const TodoTemplate = () => {
  const [todos, setTodos] = useState([]);

  const handleToggle = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  const handleRemove = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCreate = (text) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 0;

    const newTodo = {
      id: lastId + 1,
      text: text,
      done: false,
    };

    setTodos([...todos, newTodo]);
  };

  useEffect(() => {
    setTodos(TodoDummyData);
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
