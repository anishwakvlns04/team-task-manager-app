import { useState } from "react";
import API from "../services/api";

function Signup() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "MEMBER"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post("/auth/signup", formData);

      alert(response.data);

    } catch (error) {

      alert("Signup Failed");

    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100">

      <div className="bg-white p-10 rounded-2xl shadow-lg w-[450px]">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Signup
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
          />

          <select
            name="role"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
          >
            <option value="MEMBER">Member</option>
            <option value="ADMIN">Admin</option>
          </select>

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
          >
            Signup
          </button>

        </form>

      </div>

    </div>
  );
}

export default Signup;