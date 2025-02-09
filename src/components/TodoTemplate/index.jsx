import TodoList from "../TodoList";
import TodoDummyData from "../../data/dummy.json";

const TodoTemplate = () => {
  const todos = TodoDummyData;

  return (
    <>
      <TodoList todos={todos} />
    </>
  );
};

export default TodoTemplate;
