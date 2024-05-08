import React from "react";
import Table from "react-bootstrap/Table";
import "./CheckBooking.css";
import Button from "react-bootstrap/Button";
import Edit from "../Edit/Edit";
const CheckBooking = ({ storage, setStorage, name, setName }) => {
  const table_heading = ["Name", "Age", "Disease", "Time", "Action"];

  const handleDelete = (index) => {
    const new_arr = storage.filter((ele) => ele.id !== index);
    setStorage(new_arr);
  };
  return (
    <div className="tableStyle">
      <Table responsive>
        <thead>
          <tr>
            <th>Sno.</th>
            {table_heading.map((ele, index) => (
              <th key={index}>{ele}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {storage.map((ele, index) => (
            <tr key={index} className="tdStyles">
              <td>{index + 1}</td>
              <td>{ele.name}</td>
              <td>{ele.age}</td>
              <td>{ele.disease}</td>
              <td>{ele.time}</td>
              <td>
                <Edit
                  storage={storage}
                  setStorage={setStorage}
                  name={name}
                  setName={setName}
                  id={ele.id}
                />

                <Button
                  className="mx-3"
                  variant="success"
                  onClick={() => {
                    handleDelete(ele.id);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CheckBooking;
