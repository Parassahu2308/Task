import React from "react";
import "./Table.css";
import { useState } from "react";
const { TableData } = require("../../data");

const Table = () => {
  const [values, setValues] = useState(TableData);

  const update = (e) => {
    // const target = event.currentTarget;
    // console.log(target.name);
    // setSate({
    //     ...state,
    //     [target.name]:
    // })
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http---------", {
      method: "PUT",
      data: values,
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>MONTH 1</th>
            </tr>
          </thead>
          <tbody>
            {TableData.map((item) => (
              <tr>
                <td style={{ textAlign: "center" }}>{item.name}</td>
                {item.data.map((val) => (
                  <td className="input">
                    <input type="text" name={item.name} onChange={update} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <button onSubmit={handleSubmit}>Update</button>
      </form>
    </div>
  );
};
export default Table;
