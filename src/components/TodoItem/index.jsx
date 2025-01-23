import { useState } from "react";
// import { MdDone, MdDelete } from "react-icons/md";

const TodoItem = ({ todo, onToggle, onRemove }) => {
  const { id, text, done } = todo;
  const [isRemoveIconVisible, setIsRemoveIconVisible] = useState(false);

  return (
    <div
      className="item-block"
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
        className="remove-icon"
        style={{ display: isRemoveIconVisible ? "initial" : "none" }}
        onClick={() => onRemove(id)}
      >
        삭제
      </div>
    </div>
  );
};

export default TodoItem;
