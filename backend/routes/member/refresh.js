const express = require('express');
const { refresh } = require('../../utils/auth');
const router = express.Router();

router.get('/', refresh, function (req, res, next) {
  res.json({ message: `Hello` });
});
module.exports = router;