import { useState } from "react";
import plus from "../../assets/plus.png";
// import { MdAdd } from "react-icons/md";

const TodoCreate = ({ onCreate }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onCreate(text);
    }
    setText("");
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div className="absolute left-0 bottom-0 w-full z-5">
          <form className="insert-form" onSubmit={onSubmit}>
            <input
              autoFocus
              placeholder="할 일을 입력 후, Enter를 누르세요"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          </form>
        </div>
      )}
      <button
        className={open ? "circle-button button-open" : "circle-button"}
        onClick={() => setOpen(!open)}
      >
        <img src={plus} className="invert" />
      </button>
    </>
  );
};

export default TodoCreate;
