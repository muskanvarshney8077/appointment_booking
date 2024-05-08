import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";
const Edit = ({ storage, setStorage, id }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const show_arr = storage.filter((ele) => ele.id === id)[0];

  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState("");
  const [editDisease, setEditDisease] = useState("");
  const [editTime, setEditTime] = useState("");
  const arr = ["Headache", "Stomach Ache", "Fatigue", "Loose Motion"];
  const handleSave = () => {
    setStorage(
      storage.map((ele) =>
        ele.id === id
          ? {
              ...ele,
              name: editName,
              age: editAge,
              disease: editDisease,
              time: editTime,
            }
          : ele
      )
    );

    setShow(false);
  };
  useEffect(() => {
    setEditName(show_arr.name);
    setEditAge(show_arr.age);
    setEditDisease(show_arr.disease);
    setEditTime(show_arr.time);
  }, [show_arr]);
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={editName}
                onChange={(e) => {
                  setEditName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Age"
                value={editAge}
                onChange={(e) => {
                  setEditAge(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Issue</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={editDisease}
                onChange={(e) => {
                  setEditDisease(e.target.value);
                }}
              >
                <option>Select any</option>
                {arr.map((ele, index) => (
                  <option key={index}>{ele}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-1">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                value={editTime}
                onChange={(e) => {
                  setEditTime(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="success"
            onClick={() => {
              handleSave();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Edit;
