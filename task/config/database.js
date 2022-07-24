const mongoose = require("mongoose");

const Connection = async () => {
  try {
    await mongoose.connect("mongodb+srv://mern:mern@cluster0.o56f2.mongodb.net/ecommercetask?retryWrites=true&w=majority", { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};

module.exports = Connection;
