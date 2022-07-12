const express = require('express');
const router = express.Router();

// TODO : category id에 따라 id에 맞는 것만 호출해야함 일단은 dummy로
// 타입별로 따로 api를 설계해야되나
let data = {
  retSysMsg : "SUCCESS",
  data : [
    {
      id: 0,
      storekind: "K",
      image : "",
      foodName : [{
        id: 0,
        foodkind: 'meal',
        name : "육회비빔밥"
      }],
      storeName : "대가원",
      location : "서울 강서구 공항대로 209 GMG엘스타 4층 401-405호 대가원"
    }
  ],
  retCode: "0000",
  retMsg: "SUCCESS"
}

router.post('/', function (req, res, next) {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.json(data)
  });
  module.exports = router;