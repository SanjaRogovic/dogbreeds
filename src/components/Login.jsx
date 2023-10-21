import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState("");


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
      const data = await getResponse.json();
      console.log(data);
      setAuth(data)
    } catch (err) {
      console.err;
    }
  };

  // const navigate = useNavigate();

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
          />

          <br />
          <label>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
          />

          <br />
          <input type="submit" value="Submit" />
        </form>
      
      <button>GO TO DOGS</button>
    </div>
    </div>
  );
};

export default Login;
