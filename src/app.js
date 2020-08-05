const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 8282;
const URL_DB = "mongodb://localhost:27017/user";

app.use(require("./routes/loginRoutes"));

mongoose.connect(
  URL_DB,
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      return console.log(err);
    }
    return console.log("connection DB");
  }
);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
