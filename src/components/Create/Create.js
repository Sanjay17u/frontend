import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Create.css";
import axios from 'axios'

function Create() {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  
  const handleCreatePost = async (e) => {
    e.preventDefault();

    console.log({ username, email });

    try {
      const response = await axios.post('http://localhost:5000/api', {
        username,
        email,
      })
      alert(response.data.message)
      setUsername('')
      setEmail('')
    } catch (error) {
      console.error('Error adding user')
      alert('Failed to add user')
    }

  }

// JSX -- Part

  return (
    <>
      <form className="container my-5" style={{width: "18rem"}} onSubmit={handleCreatePost}>
        <div className="mb-3">
          <label htmlFor="exampleInputUsername1" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            required={true}
            placeholder="username"
            onChange={(e)=> setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputPassword1"
            aria-describedby="emailHelp"
            required={true}
            placeholder="email"
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Create;
