import { useState } from "react";
import API from "../services/api";

function CreateProject() {

  const [project, setProject] = useState({
    title: "",
    description: ""
  });

  const handleChange = (e) => {

    setProject({
      ...project,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/projects", project);

      alert("Project Created Successfully");

      setProject({
        title: "",
        description: ""
      });

    } catch (error) {

      alert("Project Creation Failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">

      <div className="bg-white p-10 rounded-2xl shadow-lg w-[500px]">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Create Project
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={project.title}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
          />

          <textarea
            name="description"
            placeholder="Project Description"
            value={project.description}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4 h-32"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Create Project
          </button>

        </form>

      </div>

    </div>
  );
}

export default CreateProject;