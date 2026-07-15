import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// =========================
// GET ALL TASKS
// =========================
export const getAllTasks = async () => {
  const response = await api.get("/tasks");
  return response.data;
};

// =========================
// GET SINGLE TASK
// =========================
export const getTask = async (taskId) => {
  const response = await api.get(`/tasks/${taskId}`);
  return response.data;
};

// =========================
// CREATE TASK
// =========================
export const createTask = async (taskData) => {
  const response = await api.post("/tasks/create_post", taskData);
  return response.data;
};

// =========================
// UPDATE TASK (PUT)
// =========================
export const updateTask = async (taskId, taskData) => {
  const response = await api.put(`/tasks/${taskId}`, taskData);
  return response.data;
};

// =========================
// PATCH TASK
// =========================
export const patchTask = async (taskId, taskData) => {
  const response = await api.patch(`/tasks/${taskId}`, taskData);
  return response.data;
};

// =========================
// DELETE TASK
// =========================
export const deleteTask = async (taskId) => {
  const response = await api.delete(`/tasks/${taskId}`);
  return response.data;
};