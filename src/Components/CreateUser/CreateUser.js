import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CreateUser = () => {
  const [users, setUsers] = useState({});

  const handleCreateUser = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("User is Created in MongoDB");
          event.target.reset();
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
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create User
        </Button>
      </Form>
    </div>
  );
};

export default CreateUser;
