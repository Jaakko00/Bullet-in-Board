const express = require("express");
var cors = require("cors");
const app = express();

const locations = require("./routes/locations.js");

app.use(cors());

app.use(express.json());

app.use(express.static("frontend/build"));

app.use("/locations", locations);

const server = app.listen(8080, () => {
  console.log(`Listening on port ${server.address().port}`);
});
