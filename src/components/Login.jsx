import React, {useState, useEffect} from 'react'


// async function LoginUser(credentials) {
//     return fetch('http://localhost:8080/login',{
//         method: 'POST',
//         header: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     }).then(data => data.json())
// }


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const userLogin = async (credentials) => {
        try {
            const url = "http://localhost:3000/api/auth/login";
            const requestData = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({username: credentials.username, password: credentials.password })
            };
            const getResponse = await fetch(url, requestData);
            const data = await getResponse.json();
            console.log(data);
        } catch (err) {
            console.err
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await userLogin({
            username,
            password
        })
        console.log(response)
    }

  return (
    <div>
      <div>Login</div>

      {/* <div>
<form action="/dogbreeds/api/auth/login" method="post">
                <label for="register">Username:</label>
                <input type="text" id="register" name="register" placeholder = "Username"/>
     
                <br />
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder = "Your password"/>
                <br />
                <label for="register">E-mail:</label>
                <input type="text" id="register" name="register" placeholder = "E-mail"/>
                <br />
                <input type="submit" value="Submit"/>
       </form> 
</div> */}

      <div>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e)=> setUsername(e.target.value)}
            placeholder="Username"
          />

          <br />
          <label>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="Your password"
          />

          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Login