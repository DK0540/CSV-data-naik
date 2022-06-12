import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios"

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/signIn", credentials).then((data)=>{
      console.log(data.data);
      if(data.data.success === true){
        localStorage.setItem("token", data.data.authtoken)
        navigate("/")
        window.alert("Login Successfull")
      }
    }).catch((err)=>{
      console.log(err);
    })
    
   };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="my-3">
      <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <div className="my-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          value={credentials.email}
          onChange={handleChange}
          id="exampleInputEmail1"
          name="email"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          value={credentials.password}
          onChange={handleChange}
          id="exampleInputPassword1"
          name="password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </div>
  );
};

export default Login;
