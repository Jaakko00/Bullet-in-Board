const express = require("express");
var router = express.Router();
const database = require("../database/crudrepository");

router.get("/:urlId([1-9]+)", async (req, res) => {
  let locationId = req.params.urlId;
  let location = await database.findById(locationId);
  res.send(location);
});

router.get("/", async (req, res) => {
  let all = await database.findAll();
  res.send(all);
});

router.post("/", async (req, res) => {
  let location = req.body;
  console.log(location);
  try {
     let result = await database.save(location); 
     res.send(result);
  } catch(err) {
    console.log(err);
  }
  
});

router.delete("/:urlId([0-9]+)", async (req, res) => {
  let locationId = req.params.urlId;
  let result = await database.deleteById(locationId);
  res.status(204).send(result);
});

module.exports = router;
