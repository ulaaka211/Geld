const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://uulaaka73:sain123456@cluster0.acrr0gy.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("succesfully connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  connectDatabase,
};
