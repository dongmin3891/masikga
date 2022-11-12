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
    },
    {
      id: 1,
      storekind: "K",
      image : "",
      foodName : [{
        id: 0,
        foodkind: 'meal',
        name : "육회비빔밥"
      }],
      storeName : "대가원",
      location : "서울 강서구 공항대로 209 GMG엘스타 4층 401-405호 대가원"
    },
    {
      id: 2,
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
    ,{
      id: 3,
      storekind: "K",
      image : "",
      foodName : [{
        id: 0,
        foodkind: 'meal',
        name : "육회비빔밥"
      }],
      storeName : "대가원",
      location : "서울 강서구 공항대로 209 GMG엘스타 4층 401-405호 대가원"
    },
    {
      id: 4,
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

const filterMenuList = (id = '0') => {
  console.log("filterResult0", data);
  let copyData = data;
  console.log("copyData", copyData)
  const filterResult = copyData.data.filter((items) => {
    console.log("Number",items.id, Number(id))
    return items.id === Number(id);
    
  })
  console.log("filterResult", filterResult);
  copyData.data = filterResult;
  console.log("filterResult2", copyData);
  return copyData;
}

router.post('/', function (req, res, next) {
    console.log(" req 확인 body ===>", req.body, req.query);
    if(req.query.id){
      filterMenuList(req.query.id);
    }
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.json(data)
  });
  module.exports = router;