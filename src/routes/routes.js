const express = require("express");
const router = express.Router();
const productsController = require("../controller/productsController");
const categoriesController = require("../controller/categoriesController");

// Fetch Product-list API
router.get("/fetchProducts", productsController.fetchProducts);
// router.get("/search");
router.get("/fetchCategories", categoriesController.fetchCategories);

module.exports = router;
