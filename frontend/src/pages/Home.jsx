import { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import Navbar from "../components/Navbar";
import * as api from "../services/api";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchTasks = async () => {
    const res = await api.getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <Navbar onAddTask={() => setEditing(null)} />

      {/* 2-COLUMN LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT: TASK LIST */}
        <div className="md:col-span-2 bg-[#121212] p-5 rounded-lg border border-gray-700">
          <h2 className="text-xl font-bold mb-4">Task List</h2>

          <TaskList
            tasks={tasks}
            onEdit={(task) => setEditing(task)}
            onDelete={async (id) => {
              await api.deleteTask(id);
              fetchTasks();
            }}
          />
        </div>

        {/* RIGHT: ADD/EDIT FORM */}
        <div className="bg-[#121212] p-5 rounded-lg border border-gray-700">
          <h2 className="text-xl font-bold mb-4">
            {editing ? "Edit Task" : "Add Task"}
          </h2>

          <TaskForm
            editing={editing}
            onSuccess={() => {
              setEditing(null);
              fetchTasks();
            }}
          />
        </div>

      </div>
    </>
  );
}
