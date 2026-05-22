import { useEffect, useState } from "react";
import API from "../services/api";

function CreateTask() {

  const [projects, setProjects] = useState([]);

  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "PENDING",
    dueDate: "",
    assignedTo: "",
    projectId: ""
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {

    const response = await API.get("/projects");

    setProjects(response.data);
  };

  const handleChange = (e) => {

    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const taskData = {
      title: task.title,
      description: task.description,
      status: task.status,
      dueDate: task.dueDate,
      assignedTo: task.assignedTo,
      project: {
        id: task.projectId
      }
    };

    try {

      await API.post("/tasks", taskData);

      alert("Task Created Successfully");

      setTask({
        title: "",
        description: "",
        status: "PENDING",
        dueDate: "",
        assignedTo: "",
        projectId: ""
      });

    } catch (error) {

      alert("Task Creation Failed");

    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">

      <div className="bg-white p-10 rounded-2xl shadow-lg w-[550px]">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Create Task
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="title"
            placeholder="Task Title"
            value={task.title}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
          />

          <textarea
            name="description"
            placeholder="Task Description"
            value={task.description}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4 h-28"
          />

          <input
            type="text"
            name="assignedTo"
            placeholder="Assigned To"
            value={task.assignedTo}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
          />

          <select
            name="status"
            value={task.status}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
          >
            <option value="PENDING">Pending</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="COMPLETED">Completed</option>
          </select>

          <select
            name="projectId"
            value={task.projectId}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-6"
          >

            <option value="">
              Select Project
            </option>

            {projects.map((project) => (

              <option
                key={project.id}
                value={project.id}
              >
                {project.title}
              </option>

            ))}

          </select>

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
          >
            Create Task
          </button>

        </form>

      </div>

    </div>
  );
}

export default CreateTask;