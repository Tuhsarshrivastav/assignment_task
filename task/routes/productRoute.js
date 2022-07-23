const express = require("express");
const router = express.Router();
const Products = require("../controllers/productController");
router.get("/getAllProduct", Products.getAllProducts);

module.exports = router;
