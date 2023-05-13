import React from "react";
import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/users">User Details</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
