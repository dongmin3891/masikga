const express = require('express');
const router = express.Router();

router.post('/', function (req, res, next) {
    res.json({ menu : {id : 0, meal : "해장국"}})
  });
  module.exports = router;