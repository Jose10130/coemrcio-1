const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products");

// /productos

/*router.get("/",productsController.list);*/

router.get('/detalle/:id', productsController.detail);



module.exports = router; 