import plus from "../../assets/plus.png";

const TodoCreate = () => {
  return (
    <>
      <div className="absolute left-0 bottom-0 w-full z-5">
        <form className="insert-form">
          <input autoFocus placeholder="할 일을 입력 후, Enter를 누르세요" />
        </form>
      </div>

      <button className={"circle-button button-open"}>
        <img src={plus} className="invert" />
      </button>
    </>
  );
};

export default TodoCreate;
