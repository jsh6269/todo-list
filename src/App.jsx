import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="template-container">
        <Routes>
          <Route path="/" element={<TodoTemplate />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
