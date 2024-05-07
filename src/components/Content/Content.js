import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Content.css";

const Content = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <div className="d-flex justify-content-around align-items-center vh-100">
      <Row>
        <Col>
          <Button
            variant="success"
            className="button_style"
            onClick={() => {
              handleClick("/book");
            }}
          >
            Book Appointment
          </Button>
        </Col>
        <Col>
          <Button
            variant="success"
            className="button_style"
            onClick={() => {
              handleClick("/check");
            }}
          >
            Check Appointment
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Content;
