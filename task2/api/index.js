const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());
const cors = require("cors");
const noteRouter = require("./routes/note");

app.use(cors());

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/note", noteRouter);

app.listen(5000, () => {
  console.log("Server running at 5000!");
});
