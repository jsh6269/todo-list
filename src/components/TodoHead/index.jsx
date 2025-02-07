const TodoHead = ({ todos }) => {
  const undoneTodos = todos.filter((todo) => !todo.done);
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
  });
  const date = `${dateString}`;
  const day = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <div className="head-container">
      <h1>{date}</h1>
      <p className="day">{day}</p>
      <div className="todos-left">할 일 {undoneTodos.length}개 남음</div>
    </div>
  );
};

export default TodoHead;
