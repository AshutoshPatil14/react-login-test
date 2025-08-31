import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [userDetails, setUserDetails] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setUserDetails({...userDetails, [e.target.name]: e.target.value})
    }

    const handleSubmit =(e) => {
        e.preventDefault()
        const {username, password} = userDetails
        if(username === '' || password === '') {
            toast.error('Please fill in all fields')
            return
        }
        localStorage.setItem('userDetails', JSON.stringify(userDetails))
        toast.success('Registration Successful')
        setUserDetails({
            username: '',
            password: ''
        })
        navigate("/login")
    }

    const navigate = useNavigate()


  return (
    <div>
        <h1>Register</h1>

      <fieldset
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ alignSelf: "flex-start" }} htmlFor="username">
            Username
          </label>
          <input type="text" id="username" name="username" onChange={handleChange} value={userDetails.username} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ alignSelf: "flex-start" }} htmlFor="password">
            Password
          </label>
          <input type="password" id="password" name="password" onChange={handleChange} value={userDetails.password} />
        </div>
        <button onClick={handleSubmit}>Register</button>
      </fieldset>
    </div>
  );
};

export default Register;
