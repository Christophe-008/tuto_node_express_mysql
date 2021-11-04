const express = require("express");
const app = express();
const path = require("path");

const userController = require("./controllers/user");

app.use(express.json());
const message = { msg: "coucou" };

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});
app.get("/users", userController.read);
app.post("/users", userController.create);

app.delete("/users", userController.delete);

app.listen(5050, console.log("server running"));
