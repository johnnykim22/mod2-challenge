import React from "react";
import { useState } from "react";
import axios from "axios";



const Login = () => {
    const [cred, setCred] = useState({
      username: "",
      password: "",
    })



    const handleChange = (e) => {
      setCred({
        ...cred,
        [e.target.name]: e.target.value,
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:9000/api/login", cred)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("token", res.payload);
        })
        .catch((err) => console.log(err));
    }


    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
          <label htmlFor="username">Username:</label>
          <input onChange={handleChange} name='username' type="text" placeholder="username" />
          </div>
  
          <div>
          <label htmlFor="password">Password:</label>
          <input onChange={handleChange} name='password' type="password" placeholder="password" />
          </div>
  
          <div>
          <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  };

  export default Login;