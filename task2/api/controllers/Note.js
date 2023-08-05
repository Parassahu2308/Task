const NoteModel = require("../models/Note");

module.exports.AddNote = async function (req, res) {
  const newNote = new NoteModel(req.body);
  try {
    const saveNote = await newNote.save();
    res.status(201).json(saveNote);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports.DeleteNote = async function (req, res) {
  try {
    await NoteModel.findByIdAndDelete(req.body.id);
    res.status(200).json("Delete Successfully");
  } catch (err) {
    res.status(500).json(err.message);
  }
};
module.exports.GetAllNotes = async function (req, res) {
  try {
    const allNotes = await NoteModel.find();
    res.status(200).json(allNotes);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
