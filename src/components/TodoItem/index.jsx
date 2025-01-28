import { useState } from "react";

const TodoItem = ({ todo, onToggle, onRemove }) => {
  const { id, text, done } = todo;
  const [isRemoveIconVisible, setIsRemoveIconVisible] = useState(false);

  return (
    <div
      className="flex items-center py-3"
      onMouseOver={() => setIsRemoveIconVisible(true)}
      onMouseLeave={() => setIsRemoveIconVisible(false)}
    >
      <div
        className={done ? "check-circle circle-done" : "check-circle"}
        onClick={() => onToggle(id)}
      >
        {done ? "✓" : ""}
      </div>
      <div className={done ? "text text-done" : "text"}>{text}</div>
      <div
        className={`remove-icon ${
          isRemoveIconVisible ? "visible" : "invisible"
        }`}
        onClick={() => onRemove(id)}
      >
        삭제
      </div>
    </div>
  );
};

export default TodoItem;
