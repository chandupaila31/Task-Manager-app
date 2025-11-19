import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Get all tasks
export const getTasks = () => API.get("/tasks");

// Create a new task
export const createTask = (data) => API.post("/tasks", data);

// Update an existing task
export const updateTask = (id, data) => API.put(`/tasks/${id}`, data);

// Delete a task
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
