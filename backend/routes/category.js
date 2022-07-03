const express = require('express');
const router = express.Router();

// TODO : api 설계 변경해야함 20220627
let data = {
    retSysMsg : "SUCCESS",
    data : [
        {
            id: 0,
            kind: "A",
            categoryName: '전체'
        },
        {
            id: 1,
            kind: "K",
            categoryName: '한식',
        },
        {
            id: 2,
            kind: "C",
            categoryName: '중식'
        },
        {
            id: 3,
            kind: "J",
            categoryName: '일식'
        },
        {
            id: 4,
            kind: "W",
            categoryName: '양식'
        },
        {
            id: 5,
            kind: "S",
            categoryName: '분식'
        },
        {
            id: 6,
            kind: "AC",
            categoryName: '술'
        },
        {
            id: 7,
            kind: "R",
            categoryName: '랜덤'
        }
    ],
    retCode: "0000",
    retMsg: "SUCCESS",
}

router.post('/', function (req, res, next) {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.json(data)
});
module.exports = router;