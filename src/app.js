const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8000;
const URL_DB = process.env.URL_DB;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require("./routes/loginRoutes"));

mongoose.connect(
  URL_DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
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
