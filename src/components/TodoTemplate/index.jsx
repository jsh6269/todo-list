import TodoList from "../TodoList";
import TodoDummyData from "../../data/dummy.json";
import TodoHead from "../TodoHead";
import TodoCreate from "../TodoCreate";

const TodoTemplate = () => {
  const todos = TodoDummyData;

  return (
    <>
      <TodoHead todos={todos} />
      <TodoList todos={todos} />
      <TodoCreate />
    </>
  );
};

export default TodoTemplate;
