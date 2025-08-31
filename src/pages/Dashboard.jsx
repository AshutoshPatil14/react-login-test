import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { username } = JSON.parse(localStorage.getItem("userDetails"));

  const handleLogout = () => {
    localStorage.clear()
    navigate("/login");
  };
  return (
    <div>
      <h1>Hello {username}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
