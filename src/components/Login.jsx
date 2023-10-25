import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showElement, setShowElement] = useState(false);
  const navigate = useNavigate();

  const userLogin = async (credentials) => {
    try {
      const url = "http://localhost:3000/api/auth/dogbreeds/login";
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

        const userToken = data.token;

        sessionStorage.setItem("token", JSON.stringify(userToken));

        if(userToken){
          navigate("/dogbreeds/homepage")
        }
        return data;
      } else {
        const data = await getResponse.json();
        setError("Invalid username or password, please try again!");
        setShowElement(true);

        return data;
      }
    } catch (err) {
      console.error(err);
    }
  };
  console.log(error);

  useEffect(() => {
    let timer = setTimeout(() => {
      setShowElement(false);
    }, 3500);
    return () => {
      clearTimeout(timer);
    };
  }, [showElement]);

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
      <div>
        <form onSubmit={handleSubmit} className="loginForm">
          <p className="loginRegisterTitle">Login</p>
          {showElement ? (
            <div class="popup">
              <p id="timer" class="popuptext">
                {" "}
                {error}{" "}
              </p>
            </div>
          ) : null}

          <label className="loginLabel">Username:</label>
          <input
            type="text"
            id="username"
            className="login-text-input"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <label className="loginLabel">Password:</label>
          <input
            type="password"
            id="password"
            className="login-text-input"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            required
          />
          <input type="submit" className="loginButton" value="LOG ME IN" />
        </form>
      </div>
    </div>
  );
};

export default Login;
