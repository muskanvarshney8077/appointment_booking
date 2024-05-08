import React from "react";
import "./BookPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

const BookPage = ({
  name,
  setName,
  age,
  setAge,
  disease,
  setDisease,
  time,
  setTime,
  storage,
  setStorage,
}) => {
  const arr = ["Headache", "Stomach Ache", "Fatigue", "Loose Motion"];
  console.log(storage);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setStorage([
      ...storage,
      {
        id: storage.length ? storage[storage.length - 1].id + 1 : 1,
        name: _.startCase(_.toLower(name)),
        age: age,
        disease: disease,
        time: time,
      },
    ]);
    setName("");
    setAge("");
    setTime("");
    setDisease("");
    navigate("/");
  };

  return (
    <div className="formStyle">
      <Form>
        <Form.Group className="mb-1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label>Issue</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={disease}
            onChange={(e) => {
              setDisease(e.target.value);
            }}
          >
            <option>Select any</option>
            {arr.map((ele) => (
              <option>{ele}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </Form.Group>
        <Button
          variant="success"
          className="mb-1 submitStyle"
          type="submit"
          onClick={handleClick}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookPage;
