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
// export const getTask = async (taskId) => {
//   const response = await api.get(`/tasks/${taskId}`);
//   return response.data;
// };

// =========================
// CREATE TASK
// =========================
export const createTask = async (taskData) => {
  try {
    const response = await api.post("/tasks/create_post", taskData);
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.detail || "Failed to create task",
    };
  }
};

// =========================
// UPDATE TASK (PUT)
// =========================
export const updateTask = async (taskId, taskData) => {
  try {
    const response = await api.put(`/tasks/update_post/${taskId}`, taskData);
    return { success: true, data: response.data };
  }
  catch (error) {
    return {
      success: false,
      error: error.response?.data?.detail || "Failed to edit task",
    };
  }
};

// =========================
// PATCH TASK
// =========================
// export const patchTask = async (taskId, taskData) => {
//   const response = await api.patch(`/tasks/${taskId}`, taskData);
//   return response.data;
// };

// =========================
// DELETE TASK
// =========================
// export const deleteTask = async (taskId) => {
//   const response = await api.delete(`/tasks/${taskId}`);
//   return response.data;
// };


// =========================
// GET A SPECIFIC USER'S TASKS  
// =========================
export const get_specific_user_tasks = async (user_id) => {
  const response = await api.get(`/tasks/my_tasks/${user_id}`)

  return response.data
}