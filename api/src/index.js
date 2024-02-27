const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const { connectDatabase } = require("./database/page");

const app = express();
connectDatabase();
app.use(cors());
app.use(bodyParser.json());

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const token = jwt.sign({ email }, "meloncholy");

  if (email == "1" && password == "1") {
    return res.json({
      token,
    });
  }
  res.status(401).json({
    message: "Invalid credentials",
  });
});

const port = 3001;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
