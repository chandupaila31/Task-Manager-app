import { useEffect, useState } from "react";
import * as api from "../services/api";
import { FiEdit3, FiPlusCircle } from "react-icons/fi";

export default function TaskForm({ editing, onSuccess }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    if (editing) {
      setTitle(editing.title);
      setDescription(editing.description);
      setStatus(editing.status);
    } else {
      setTitle("");
      setDescription("");
      setStatus("Pending");
    }
  }, [editing]);

  const submit = async (e) => {
    e.preventDefault();

    console.log("FORM SUBMITTED:", { title, description, status });

    if (!title.trim()) {
      alert("Please enter a title.");
      return;
    }

    if (editing) {
      await api.updateTask(editing._id, { title, description, status });
    } else {
      await api.createTask({ title, description, status });
    }

    onSuccess();
  };

  return (
    <form onSubmit={submit} className="space-y-5 text-white">

      {/* TITLE */}
      <div>
        <label className="text-sm">Title</label>
        <input
          className="w-full p-2 mt-1 rounded-md bg-[#1e1e1e] border border-gray-700 outline-none"
          placeholder="Enter task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* DESCRIPTION */}
      <div>
        <label className="text-sm">Description</label>
        <textarea
          rows="4"
          className="w-full p-2 mt-1 rounded-md bg-[#1e1e1e] border border-gray-700 outline-none"
          placeholder="Enter task description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* STATUS */}
      <div>
        <label className="text-sm">Status</label>
        <select
          className="w-full p-2 mt-1 rounded-md bg-[#1e1e1e] border border-gray-700 outline-none"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Pending</option>
          <option>Completed</option>
        </select>
      </div>

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold flex items-center justify-center gap-2"
      >
        {editing ? (
          <>
            <FiEdit3 size={18} /> Update Task
          </>
        ) : (
          <>
            <FiPlusCircle size={18} /> Add Task
          </>
        )}
      </button>

    </form>
  );
}
