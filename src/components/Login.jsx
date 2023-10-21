import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [message, setMessage] = useState(false)
  // const [showElement,setShowElement] = useState(false)

  const userLogin = async (credentials) => {
    try {
      const url = "http://localhost:3000/api/auth/login";
      const requestData = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: credentials.username,
          password: credentials.password,
        }),
      };
      const getResponse = await fetch(url, requestData);
      console.log(getResponse);

      if (getResponse.ok) {
        const data = await getResponse.json();
        console.log(data);

        navigate("/dogbreeds/homepage");
        return data;
      } else {
        const data = await getResponse.json();
        setError("Error");
        return data;
      }
    } catch (err) {
      console.error(err);
    }
  };

  console.log(error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await userLogin({
      username,
      password,
    });
    console.log(response);
  };


  return (
    <div>
      <div>Login</div>

      <div>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />

          <br />
          <label>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            required
          />

          <br />
          <input type="submit" value="Submit" />
        </form>
       
        {error ? <p>{error} </p> : null} 
      </div>
    </div>
  );
};

export default Login;
