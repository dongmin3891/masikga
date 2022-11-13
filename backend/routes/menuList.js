const express = require('express');
const router = express.Router();

// TODO : category id에 따라 id에 맞는 것만 호출해야함 일단은 dummy로
// 타입별로 따로 api를 설계해야되나
let menu = {
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
        name : "돈까스"
      }],
      storeName : "인정 돈까스",
      location : "서울 강서구 공항대로 209 GMG엘스타 4층 401-405호 대가원"
    },
    {
      id: 2,
      storekind: "K",
      image : "",
      foodName : [{
        id: 0,
        foodkind: 'meal',
        name : "강릉 순두부"
      }],
      storeName : "강릉순두부",
      location : "서울 강서구 공항대로 209 GMG엘스타 4층 401-405호 대가원"
    }
    ,{
      id: 3,
      storekind: "K",
      image : "",
      foodName : [{
        id: 0,
        foodkind: 'meal',
        name : "돼지국밥"
      }],
      storeName : "오국밥",
      location : "서울 강서구 공항대로 209 GMG엘스타 4층 401-405호 대가원"
    },
    {
      id: 4,
      storekind: "K",
      image : "",
      foodName : [{
        id: 0,
        foodkind: 'meal',
        name : "랜덤메뉴"
      }],
      storeName : "갈비의계절",
      location : "서울 강서구 공항대로 209 GMG엘스타 4층 401-405호 대가원"
    }
  ],
  retCode: "0000",
  retMsg: "SUCCESS"
}

const filterMenuList = (kind = 'A') => {
  let cloneMenu = {...menu};
  const filterResult = cloneMenu.data.filter((items) => {
    return items.storekind === kind;
  })
  cloneMenu.data = filterResult;
  return cloneMenu;
}

router.post('/', function (req, res, next) {
    let returnMenu;
    if(req.query.kind !== 'A') returnMenu = filterMenuList(req.query.kind);
    else returnMenu = {...menu}    
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.json(returnMenu);
  });
  module.exports = router;