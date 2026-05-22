import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const role = localStorage.getItem("role");
  const logout = () => {

    localStorage.removeItem("isLoggedIn");

    navigate("/");
  };

  return (
    <div className="bg-slate-900 text-white px-8 py-4 flex items-center gap-6 shadow-md">

      <h1 className="text-2xl font-bold mr-8">
        TeamTask
      </h1>

      <Link to="/" className="hover:text-blue-300">
        Login
      </Link>

      <Link to="/signup" className="hover:text-blue-300">
        Signup
      </Link>

      <Link to="/dashboard" className="hover:text-blue-300">
        Dashboard
      </Link>

      {role === "ADMIN" && (
  <Link to="/create-project" className="hover:text-blue-300">
    Create Project
  </Link>
)}

      {role === "ADMIN" && (
  <Link to="/create-task" className="hover:text-blue-300">
    Create Task
  </Link>
)}

      <button
        onClick={logout}
        className="ml-auto bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
      >
        Logout
      </button>

    </div>
  );
}

export default Navbar;