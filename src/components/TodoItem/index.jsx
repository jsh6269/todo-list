import { useState } from "react";

const TodoItem = ({ todo, onToggle, onRemove }) => {
  const { text, done } = todo;
  const [isRemoveIconVisible, setIsRemoveIconVisible] = useState(false);

  const handleMouseOver = () => setIsRemoveIconVisible(true);
  const handleMouseLeave = () => setIsRemoveIconVisible(false);
  const handleCheckButtonClick = () => onToggle();

  const handleDeleteButtonClick = () => onRemove();

  return (
    <div
      className="flex items-center py-3"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={done ? "check-circle circle-done" : "check-circle"}
        onClick={handleCheckButtonClick}
      >
        {done ? "✓" : ""}
      </div>
      <div className={done ? "text text-done" : "text"}>{text}</div>
      <div
        className={"remove-icon"}
        style={{ display: isRemoveIconVisible ? "initial" : "none" }}
        onClick={handleDeleteButtonClick}
      >
        삭제
      </div>
    </div>
  );
};

export default TodoItem;
