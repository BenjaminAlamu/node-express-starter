const mongoose = require("mongoose");
require("dotenv").config();
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DB_CONN, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((res) => {
    console.log("Connected successfully");
  })
  .catch((err) => {
    console.log({ err });
    console.log("Not connected");
  });

module.exports = { mongoose };
