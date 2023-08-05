import React, { useEffect, useState } from "react";
import axios from "axios";
import "./allNotes.css";

const AllNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/note/");
        setNotes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [notes]);

  const deleteNote = async (id) => {
    const res = await axios.delete("http://localhost:5000/api/note/delete", {
      data: { id: id },
    });
    console.log(res);
  };

  return (
    <div className="container">
      {notes &&
        notes.map((note) => {
          return (
            <div className="single-note">
              <h3>
                <strong>{note.title}</strong>
              </h3>
              <p>{note.desc}</p>
              <div className="note-footer">
                <p>{note.createdAt}</p>
                <button onClick={() => deleteNote(note._id)}>Delete</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AllNotes;
