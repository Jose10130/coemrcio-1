const productos = require("../../database/products.json")

module.exports = (req, res) => {
    return res.render("./admin/listData.ejs", {productos})
  }