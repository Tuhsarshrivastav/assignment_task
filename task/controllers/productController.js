const productModel = require("../models/productsModel");
class getAllProducts {
  async getAllProducts(req, res) {
    try {
      const products = await productModel.find({});
      return res.status(200).json(products);
    } catch (error) {
      return res
        .status(401)
        .json({ message: "something went wrong while fatching the products" });
    }
  }
}

module.exports = new getAllProducts();
