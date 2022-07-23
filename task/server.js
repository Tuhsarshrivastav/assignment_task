//dependencys
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

//imports
const Database = require("./config/database");

//db config
Database();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/", require("./routes/productRoute"));

//port
const PORT = process.env.PORT || 4000;

//server listen
app.listen(PORT, () => {
  console.log(`Server is running : ${PORT}`);
});
