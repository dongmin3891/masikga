const express = require('express');
const router = express.Router();

router.post('/', function (req, res, next) {
    // const name = req.query.name || 'World';
    res.json({ menu : {id : 0, meal : "해장국"}})
    // res.json({ message: `Hello ${name}` });
  });
  module.exports = router;