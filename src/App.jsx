import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import Calendar from "./components/Calendar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="template-container">
        <Routes>
          <Route path="/" element={<TodoTemplate />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
