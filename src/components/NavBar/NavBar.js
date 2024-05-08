import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar
        bg="success"
        variant="success"
        // className="bg-body-tertiary varaint-success"
      >
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            Appointment Booking
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
