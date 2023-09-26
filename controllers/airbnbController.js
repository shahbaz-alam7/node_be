const airbnbModel = require("../models/airbnb.js");

const getAllData = async () => {
  const data = await airbnbModel.find();
  return data;
};
