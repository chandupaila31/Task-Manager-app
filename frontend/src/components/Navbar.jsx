export default function Navbar({ onAddTask }) {
  return (
    <div className="w-full bg-[#121212] text-white p-4 rounded-lg border border-gray-700 mb-6">
      <div className="flex justify-between items-center">
        
        <h1 className="text-2xl font-bold">Task Manager</h1>

        <button
          onClick={onAddTask}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm"
        >
          + Add Task
        </button>

      </div>
    </div>
  );
}
