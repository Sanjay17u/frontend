import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Update.css";
import axios from 'axios';
import { useParams } from "react-router-dom";

function Update() {
  const { id } = useParams(); // Move useParams here

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleUpdatePost = async (e) => {
    e.preventDefault();
  
    console.log('Updating user with ID:', id);
    console.log({ username, email });
  
    try {
      const response = await axios.patch(`http://localhost:5000/api/${id}`, {
        username,
        email
      });
      alert(response.data.message);
      setUsername('');
      setEmail('');
    } catch (error) {
      console.error('Error updating user:', error.response ? error.response.data : error.message);
      alert('Failed to update user');
    }
  };


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/${id}`);
        setUsername(response.data.username);
        setEmail(response.data.email);
      } catch (error) {
        console.error('Error fetching user data:', error);
        alert('Failed to fetch user data');
      }
    };
  
    fetchUserData();
  }, [id]);
  

  
  return (
    <>
      <form className="container my-5" style={{ width: "18rem" }} onSubmit={handleUpdatePost}>
        <div className="mb-3">
          <label htmlFor="exampleInputUsername1" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUsername1" // Corrected ID here
            required={true}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1" // Corrected ID here
            aria-describedby="emailHelp"
            required={true}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </>
  );
}

export default Update;
