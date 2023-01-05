const express = require('express');
const router = express.Router();

let data = {
  retSysMsg : "SUCCESS",
  data : {
    userId: '',
    password: '',
  },
  retCode: "0000",
  retMsg: "SUCCESS",
}

router.post('/', function(req, res, next) {
  console.log("req member/login",req);
  res.statusCode = 200;
  res.json(data);
  // res.render('index', data );
});

module.exports = router;
