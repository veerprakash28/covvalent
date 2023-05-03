// Fetch All the products

const fetchProducts = async (req, res, next) => {
  try {
    const db = req.con;
    let category = req.query.categoryName;
    let search = req.query.search;
    let page = req.query.page ? parseInt(req.query.page) : 1;
    let limit = req.query.limit ? parseInt(req.query.limit) : 10;
    let offset = (page - 1) * limit;
    let query =
      "SELECT p.*, c.category_name FROM product_list p JOIN categories c ON p.category_id = c.id WHERE 1 = 1";
    let params = [];
    if (category) {
      query += " AND c.category_name = ?";
      params.push(category);
    }
    if (search) {
      query += " AND (p.product_name LIKE ? OR p.product_description LIKE ?)";
      params.push(`%${search}%`);
      params.push(`%${search}%`);
    }
    query += " LIMIT ? OFFSET ?";
    params.push(limit);
    params.push(offset);
    let results = db.query(query, params, (err, rows) => {
      if (err) {
        console.log("Error: ", err);
      } else {
        if (rows.length > 0) {
          res.send({
            status: 1,
            message: "Successfully got list of Products",
            data: rows,
          });
        } else {
          res.send({
            message: "No Product exist with this criteria",
          });
        }
      }
    });
  } catch (err) {
    res.send({
      message: "An error occurred",
      err,
    });
  }
};

module.exports = { fetchProducts };
