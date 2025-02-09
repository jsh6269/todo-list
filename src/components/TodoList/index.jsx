import TodoItem from "../TodoItem";

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <div className="flex-1 m-[20px_10px_62px_32px] overflow-y-auto">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
