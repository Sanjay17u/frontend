import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

function Read() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    
  const dataFetch = async () => {

    try {
      
      const response =  await axios.get('http://localhost:5000/api')
      setData(response.data)
      
    } catch (error) {
      console.error("Error in Feching Data:", error)
    } finally {
      setLoading(false)
    }
  }

  dataFetch();

  }, [])

  if(loading) {
    return <div>Loading...</div>
  }


  const handleDelete = async (id) => {

    try {
      await axios.delete(`http://localhost:5000/api/${id}`)
      setData(data.filter(user => user._id !== id))
    } catch (error) {
      console.error("Something Error:", error)
    }
  } 


  return (
    <>
      {data.map((user, index) => (
      <div className="card" style={{width: "18rem"}} key={index}>
        <div className="card-body">
          <h5 className="card-title">{user.username}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{user.email}</h6>
          <Link to={`/${user._id}`} className="card-link">
            Edit
          </Link>
          <a href="/" className="card-link" onClick={(e) => {
            e.preventDefault();
            handleDelete(user._id);
          }}>
            Delete
          </a>
        </div>
      </div>
      ))}
    </>
  );
}

export default Read;
