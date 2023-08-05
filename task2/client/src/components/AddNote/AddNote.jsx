import React, { useState } from "react";
import "./addNote.css";
import axios from "axios";

const AddNote = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleForm = () => {
    setShow(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Title: ", title);
    console.log("Description:", desc);
    const note = {
      title: title,
      desc: desc,
    };

    console.log(note);
    const res = await axios.post("http://localhost:5000/api/note/add", note);
    setShow(false);
    console.log(res);
  };

  return (
    <div className="addNote">
      <button onClick={handleForm}>Take a Note......</button>
      {show && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter the Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Enter Description"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button onSubmit={handleSubmit}>Add a Note</button>
        </form>
      )}
    </div>
  );
};

export default AddNote;
