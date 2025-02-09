import { instance } from "../../../axios/axios";

export const toggleTodoDone = async (id) => {
  try {
    await instance.put(`/api/todos/${id}/`);
    return true;
  } catch (e) {
    throw new Error("할일 목록 Toggle error", e);
  }
};
