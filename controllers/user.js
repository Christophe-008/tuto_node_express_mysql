const bdd = require("./../db/config");
const userController = {
  create: (req, res) => {
    const sql = "INSERT INTO users (name, password) VALUES ('Chris', '1234')";
    bdd.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
    res.json({ message: "1 record inserted" });
  },
  update: (req, res) => {},
  read: (req, res) => {
    const sql = "SELECT * FROM users";
    bdd.query(sql, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  },
  delete: (req, res) => {},
};

module.exports = userController;
