import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const userRegister = async (credentials) => {
    try {
      const url = "http://localhost:3000/api/auth/register";
      const requestData = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: credentials.username,
          password: credentials.password,
          email: credentials.email,
        }),
      };
      const getResponse = await fetch(url, requestData);
      console.log(getResponse);

      if (getResponse.ok) {
        const data = await getResponse.json();
        console.log(data);
        
        navigate("/dogbreeds/login");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await userRegister({
      username,
      password,
      email,
    });
    console.log(response);
  };

  return (
    <div>
      <div>Register</div>
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
          <label>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            required
          />
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
          />
          <input type="submit" value="Submit" />
        </form>

        {error ? <p>{error} </p> : null}
      </div>
    </div>
  );
};

export default Register;
