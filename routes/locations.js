const express = require("express");
var router = express.Router();
const database = require("../database/crudrepository");

router.get("/:urlId([1-9]+)", async (req, res) => {
  let postId = req.params.urlId;
  let post = await database.findById(postId);
  res.send(post);
});

router.get("/", async (req, res) => {
  let all = await database.findAll();
  res.send(all);
});

router.post("/", async (req, res) => {
  let post = req.body;
  console.log(post);
  try {
     let result = await database.save(post); 
     res.send(result);
  } catch(err) {
    console.log(err);
  }
  
});

router.delete("/:urlId([0-9]+)", async (req, res) => {
  let postId = req.params.urlId;
  let result = await database.deleteById(postId);
  res.status(204).send(result);
});

module.exports = router;
