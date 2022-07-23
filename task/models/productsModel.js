const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  rating: {
    rate: Number,
    count: Number,
  },
  image: {
    type: String,
    required: true,
  },
});
const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
