const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.DATABASE_URL;

const dbConnect = () => {
  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  });

  const database = mongoose.connection;
  
  database.on("error", (error) => {
    console.log(error);
  });

  database.once("connected", () => {

    console.log(`Database connected successfully`);
  });
};

module.exports = dbConnect;
