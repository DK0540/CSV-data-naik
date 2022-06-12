import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"


const Signup = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: ""});
  let navigate = useNavigate();
  // const {name, email, password} = credentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/signUp", credentials).then((data)=>{
      console.log(data.data);
      if(data.data.success === true){
        localStorage.setItem("token", data.data.token)
        console.log(data.data.token);
       
        window.alert("Register Successfull")
        navigate("/login")
      }
    })
    // const response = await fetch("http://localhost:5000/api/signUp", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name, email, password
    //   }),
    // });
    // const json = await response.json();
    // console.log(json);
    // if(json.success){
    //   //save the auth-token and redirect
    //   localStorage.setItem("token", json.token);
    //   navigate('/login')
    //   window.alert("Account Created Successfully");
    // }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="my-3">
      <h2>Create an account</h2>
    <form onSubmit={handleSubmit}>
      <div className="my-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          value={credentials.name}
          onChange={handleChange}
          id="name"
          name="name"
        />
      </div>
      <div className="mb-3">
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
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          value={credentials.password}
          onChange={handleChange}
          id="password"
          name="password" minLength={5} required
        />
      </div>
      
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </div>
  );
};

export default Signup;

