const express = require("express");
const listAllRoutes = require("express-list-endpoints");
const Table = require("cli-table");
const app = express();

require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const UPLOAD_PATH = path.join("./public/uploads");
app.use(cors(""));

require("./config/mongoose");
const logger = require("./config/logger");

var jsonParser = bodyParser.json({
  limit: 1024 * 1024 * 20,
  type: "application/json",
});
var urlencodedParser = bodyParser.urlencoded({
  extended: true,
  limit: 1024 * 1024 * 20,
  type: "application/x-www-form-urlencoded",
});

app.use(jsonParser);
app.use(urlencodedParser);
app.use("/api/v1", require("./routes/index"));
app.use(express.static(UPLOAD_PATH));

let routesList = listAllRoutes(app);
routesList = routesList.map((route) => {
  const obj = {};
  obj[route.path] = route.methods.join(" | ");
  return obj;
});
const table = new Table();
table.push({ Endpoints: "Methods" }, ...routesList);
logger.info(table.toString());

const server = app.listen(port, () => {
  console.log(`Node Starter Project starts at port ${port}`);
});
