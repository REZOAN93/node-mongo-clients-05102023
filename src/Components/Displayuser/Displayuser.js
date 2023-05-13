import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import "./Displayuser.css";

const Displayuser = () => {
  const storedUser = useLoaderData();
  const [displayUser, setdisplayUser] = useState(storedUser);

  const handleDeleteUsr = (usr) => {
    const agree = window.confirm(`Are you want to delete the user${usr.name}`);
    if (agree) {
      fetch(`http://localhost:5000/users/${usr._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert(`User deleted Successfully ${usr.name}`);
          }
          const remainingUsr = displayUser.filter(
            (user) => user._id !== usr._id
          );
          setdisplayUser(remainingUsr);
        });
    }
  };

  return (
    <div className="w-50 m-auto mt-5">
      <h2>Users: {displayUser.length}</h2>
      <ListGroup>
        {displayUser.map((usr) => (
          <ListGroup.Item className="d-flex justify-content-between">
            <p>{usr.email}</p>
            <div>
              <Link to={`/users/${usr._id}`} className="me-2">
                <button type="button" className="btn btn-outline-success">
                  Update
                </button>
              </Link>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => handleDeleteUsr(usr)}
              >
                X
              </button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Displayuser;
