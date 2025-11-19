import TaskCard from "./TaskCard";

export default function TaskList({ tasks, onEdit, onDelete }) {
  if (!tasks.length)
    return (
      <p className="text-gray-400 mt-4">
        No tasks available.
      </p>
    );

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onEdit={() => onEdit(task)}
          onDelete={() => onDelete(task._id)}
        />
      ))}
    </div>
  );
}
