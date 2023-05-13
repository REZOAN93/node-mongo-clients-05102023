import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const storedUser = useLoaderData();
  const [users, setUsers] = useState(storedUser);

  const handleCreateUser = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/users/${users._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert(`User Updated Successfully`);
        }
      });
  };

  const handleBlurUser = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...users };
    newUser[field] = value;
    setUsers(newUser);
  };
  return (
    <div>
      <Form onSubmit={handleCreateUser} className="w-25 m-auto mt-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            onBlur={handleBlurUser}
            name="name"
            placeholder="Enter name"
            defaultValue={users.name}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            onBlur={handleBlurUser}
            name="email"
            placeholder="Enter email"
            defaultValue={users.email}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="address"
            onBlur={handleBlurUser}
            name="address"
            placeholder="Enter address"
            defaultValue={users.address}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update User
        </Button>
      </Form>
    </div>
  );
};

export default UpdateUser;
