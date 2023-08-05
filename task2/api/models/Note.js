const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a Title"],
    },
    desc: {
      type: String,
      required: [true, "Please add a Description"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", noteSchema);
