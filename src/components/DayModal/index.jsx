import { useEffect, useState } from "react";
import { format } from "date-fns";
import axios from "axios";

const DayModal = ({ selectedDate, closeModal }) => {
  const [todos, setTodos] = useState([]);
  const formattedDate = format(selectedDate, "yyyy-MM-dd");

  useEffect(() => {
    // 선택한 날짜에 맞는 todo를 서버에서 가져오기
    axios
      .get(`/api/todos/date/${formattedDate}`)
      .then((response) => {
        setTodos(response.data.todos);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, [formattedDate]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50"
      onClick={closeModal}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-80"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold mb-8">{formattedDate}</h2>
        {todos.length > 0 ? (
          <ul>
            {todos.map(({ id, text, done }) => (
              <li key={id} className="mb-2">
                <p className="text-gray-700 flex justify-between m-4">
                  <span className="font-semibold">{text}</span>{" "}
                  <span className={done ? "text-green-500" : "text-red-500"}>
                    {done ? "완료" : "미완료"}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 mb-8">선택한 날짜에 일정이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default DayModal;
