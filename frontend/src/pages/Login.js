import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
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

      const response = await API.post("/auth/login", formData);

     if(response.data.message === "Login Successful") {

  localStorage.setItem("isLoggedIn", "true");

  localStorage.setItem("role", response.data.role);

  navigate("/dashboard");

} else {

  alert(response.data.message);

}

    } catch (error) {

      alert("Login Failed");

    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100">

      <div className="bg-white p-10 rounded-2xl shadow-lg w-[400px]">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Login
        </h2>

        <form onSubmit={handleSubmit}>

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

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;