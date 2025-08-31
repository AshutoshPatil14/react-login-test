import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = userDetails;
    const user = JSON.parse(localStorage.getItem("userDetails"));
    if (!user) {
      toast.error("User not found");
      navigate("/register");
      return;
    }
    if (user.username === username && user.password === password) {
      toast.success("Login Successful");
      navigate("/dashboard");
    } else {
      toast.error("Login Failed");
    }
  };

  return (
    <div>
        <h1>Login</h1>
      <fieldset
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ alignSelf: "flex-start" }} htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={userDetails.username}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ alignSelf: "flex-start" }} htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={userDetails.password}
          />
        </div>
        <button onClick={handleSubmit}>Login</button>
      </fieldset>
        {/* <button onClick={() => navigate("/register")}>Register</button> */}
    </div>
  );
};

export default Login;
