import { format } from "date-fns";
import DummyData from "../../data/dummy.json";

const DayModal = ({ selectedDate, closeModal }) => {
  const formattedDate = format(selectedDate, "yyyy-MM-dd");
  const filteredData = DummyData.filter((item) => item.date === formattedDate);

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
        {filteredData.length > 0 ? (
          <ul>
            {filteredData.map(({ id, text, done }) => (
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
