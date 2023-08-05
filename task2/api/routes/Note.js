const noteRouter = require("express").Router();

const { AddNote, DeleteNote, GetAllNotes } = require("../controllers/Note");

//Get All notes
noteRouter.get("/", GetAllNotes);

// Add New Note
noteRouter.post("/add", AddNote);

// Delete a Note
noteRouter.delete("/delete", DeleteNote);

module.exports = noteRouter;
