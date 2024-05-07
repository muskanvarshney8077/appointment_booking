import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar
        bg="success"
        variant="success"
        // className="bg-body-tertiary varaint-success"
      >
        <Container>
          <Navbar.Brand>Appointment Booking</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
