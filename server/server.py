from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime
import json
import os

app = Flask(__name__)
CORS(app)

# 데이터 파일 경로
DATA_FILE = "todos.json"

# JSON 파일 초기화
initial_data = [
    {"id": 1, "text": "밥 먹기", "done": True, "date": "2025-01-28"},
    {"id": 2, "text": "공부하기", "done": False, "date": "2025-01-28"},
    {"id": 3, "text": "놀기", "done": True, "date": "2025-01-28"},
    {"id": 4, "text": "잠자기", "done": True, "date": "2025-01-28"},
    {"id": 5, "text": "과거", "done": False, "date": "2025-01-26"},
    {"id": 6, "text": "책 읽기", "done": True, "date": "2025-01-28"}
]

# 파일이 없으면 초기화 데이터 생성
if not os.path.exists(DATA_FILE):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(initial_data, f, ensure_ascii=False, indent=4)

# 파일에서 데이터 로드
def load_data():
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        return json.load(f)

# 파일에 데이터 저장
def save_data(data):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

# 오늘의 TODO 가져오기
@app.route("/api/todos", methods=["GET"])
def get_todos():
    data = load_data()
    today_date = datetime.now().strftime("%Y-%m-%d")  # 현재 날짜 가져오기 (YYYY-MM-DD 형식)
    filtered_todos = [todo for todo in data if todo["date"] == today_date]
    return jsonify({"todos": filtered_todos})

# 새로운 TODO 생성
@app.route("/api/todos/create/", methods=["POST"])
def create_todo():
    data = load_data()
    new_todo = request.json
    if not new_todo.get("text"):
        return jsonify({"error": "Todo text is required"}), 400

    new_id = max(todo["id"] for todo in data) + 1 if data else 1
    today_date = datetime.now().strftime("%Y-%m-%d")  # 현재 날짜 가져오기 (YYYY-MM-DD 형식)
    todo = {
        "id": new_id,
        "text": new_todo["text"],
        "done": False,
        "date": new_todo.get("date", today_date),
    }
    data.append(todo)
    save_data(data)
    return jsonify({"todo": todo}), 201

# 특정 TODO의 완료 상태 토글
@app.route("/api/todos/<int:todo_id>/", methods=["PUT"])
def toggle_todo(todo_id):
    data = load_data()
    for todo in data:
        if todo["id"] == todo_id:
            todo["done"] = not todo["done"]
            save_data(data)
            return jsonify({"success": True})

    return jsonify({"error": "Todo not found"}), 404

# 특정 TODO 삭제
@app.route("/api/todos/<int:todo_id>/", methods=["DELETE"])
def delete_todo(todo_id):
    data = load_data()
    new_data = [todo for todo in data if todo["id"] != todo_id]

    if len(new_data) == len(data):
        return jsonify({"error": "Todo not found"}), 404

    save_data(new_data)
    return jsonify({"success": True})

# 특정 날짜의 TODO 가져오기
@app.route("/api/todos/date/<string:date>/", methods=["GET"])
def get_todos_by_date(date):
    data = load_data()
    filtered_todos = [todo for todo in data if todo["date"] == date]
    return jsonify({"todos": filtered_todos})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
