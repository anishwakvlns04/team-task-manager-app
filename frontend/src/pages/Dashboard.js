import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {

  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchProjects();
    fetchTasks();
  }, []);

  const fetchProjects = async () => {

    const response = await API.get("/projects");

    setProjects(response.data);
  };

  const fetchTasks = async () => {

    const response = await API.get("/tasks");

    setTasks(response.data);
  };

  const updateStatus = async (id, status) => {

    try {

      await API.put(`/tasks/${id}?status=${status}`);

      fetchTasks();

    } catch (error) {

      alert("Status Update Failed");

    }
  };

  const completedTasks = tasks.filter(
    (task) => task.status === "COMPLETED"
  ).length;



  const inProgressTasks = tasks.filter(
    (task) => task.status === "IN_PROGRESS"
  ).length;

  const getStatusColor = (status) => {

    if (status === "COMPLETED") {
      return "bg-green-500";
    }

    if (status === "IN_PROGRESS") {
      return "bg-orange-500";
    }

    return "bg-red-500";
  };

  const isOverdue = (dueDate, status) => {

    if (status === "COMPLETED") {
      return false;
    }

    return new Date(dueDate) < new Date();
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        Team Task Dashboard
      </h1>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-gray-500">Projects</h3>
          <h1 className="text-4xl font-bold mt-2">
            {projects.length}
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-gray-500">Tasks</h3>
          <h1 className="text-4xl font-bold mt-2">
            {tasks.length}
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-gray-500">Completed</h3>
          <h1 className="text-4xl font-bold mt-2 text-green-600">
            {completedTasks}
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-gray-500">In Progress</h3>
          <h1 className="text-4xl font-bold mt-2 text-orange-500">
            {inProgressTasks}
          </h1>
        </div>

      </div>

      {/* Projects */}

      <h2 className="text-2xl font-bold mb-4">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

        {projects.map((project) => (

          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-md p-6"
          >

            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-gray-600">
              {project.description}
            </p>

          </div>

        ))}

      </div>

      {/* Tasks */}

      <h2 className="text-2xl font-bold mb-4">
        Tasks
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {tasks.map((task) => (

          <div
            key={task.id}
            className={`bg-white rounded-2xl shadow-md p-6 border-l-4 ${
              isOverdue(task.dueDate, task.status)
                ? "border-red-500"
                : "border-blue-500"
            }`}
          >

            <h3 className="text-xl font-semibold mb-2">
              {task.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {task.description}
            </p>

            <p className="mb-2">
              <strong>Assigned To:</strong> {task.assignedTo}
            </p>

            <p className="mb-4">
              <strong>Due Date:</strong> {task.dueDate}
            </p>

            <span
              className={`${getStatusColor(task.status)} text-white px-4 py-1 rounded-full text-sm`}
            >
              {task.status}
            </span>

            <div className="flex gap-3 mt-5">

              <button
                onClick={() => updateStatus(task.id, "IN_PROGRESS")}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
              >
                In Progress
              </button>

              <button
                onClick={() => updateStatus(task.id, "COMPLETED")}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
              >
                Complete
              </button>

            </div>

            {isOverdue(task.dueDate, task.status) && (
              <p className="text-red-600 font-semibold mt-4">
                Overdue Task
              </p>
            )}

          </div>

        ))}

      </div>

    </div>
  );
}

export default Dashboard;