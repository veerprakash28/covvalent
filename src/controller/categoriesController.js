// Fetch All categories

const fetchCategories = async (req, res, next) => {
  try {
    var db = req.con;
    let query = "SELECT * from categories";
    let results = db.query(query, (err, rows) => {
      if (err) {
        res.send({ message: "An error occured: ", err });
      } else {
        if (rows.length > 0) {
          res.send({
            status: 1,
            message: "All Categories Fetched Successfully",
            data: rows,
          });
        } else {
          res.send({
            status: 1,
            message: "No Categories are stored in table",
            data: rows,
          });
        }
      }
    });
  } catch (err) {
    res.send({
      message: "An error occured",
      err,
    });
  }
};

module.exports = { fetchCategories };
