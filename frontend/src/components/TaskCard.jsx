export default function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="bg-[#1e1e1e] p-4 rounded-lg border border-gray-700">

      <div className="flex justify-between items-start gap-4">

        {/* LEFT: Title + Description */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p className="text-gray-300 text-sm mt-1">{task.description}</p>
        </div>

        {/* RIGHT: Status + Buttons */}
        <div className="text-right min-w-[120px]">

          <span
            className={
              task.status === "Completed"
                ? "bg-green-600 text-white px-3 py-1 rounded-full text-xs"
                : "bg-yellow-500 text-black px-3 py-1 rounded-full text-xs"
            }
          >
            {task.status}
          </span>

          <div className="mt-2 flex flex-col gap-2 items-end">
            <button
              onClick={onEdit}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm"
            >
              Edit
            </button>

            <button
              onClick={onDelete}
              className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm"
            >
              Delete
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
