import React from "react";
import Table from "react-bootstrap/Table";
import "./CheckBooking.css";
import Button from "react-bootstrap/Button";
import Edit from "../Edit/Edit";
const CheckBooking = ({ storage }) => {
  const table_heading = ["Name", "Age", "Disease", "Time", "Action"];
  const handleEdit = () => {};
  const handleDelete = (index) => {
    storage.filter((ele) => ele.id !== index);
    console.log(storage);
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
              <td>{ele.id}</td>
              <td>{ele.name}</td>
              <td>{ele.age}</td>
              <td>{ele.disease}</td>
              <td>{ele.time}</td>
              <td>
                <Edit />

                <Button
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
