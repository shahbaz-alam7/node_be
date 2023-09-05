const express = require("express");
const app = express();

const dbConnect = require("./dbConnect.js");
const airbnb = require("./routes/airbnb.js");
const PORT = process.env.PORT || 4002;

dbConnect();

app.use("/airbnb", airbnb);
app.get("/", (req, res) => {
  res.json("hiiii");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
