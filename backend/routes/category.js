const express = require('express');
const router = express.Router();

let category = {
    retSysMsg : "SUCCESS",
    data : [
        {
            id: 0,
            categoryName: '전체'
        },
        {
            id: 1,
            categoryName: '한식',
        },
        {
            id: 2,
            categoryName: '중식'
        },
        {
            id: 3,
            categoryName: '일식'
        },
        {
            id: 4,
            categoryName: '양식'
        },
        {
            id: 5,
            categoryName: '분식'
        },
        {
            id: 6,
            categoryName: '술'
        },
        {
            id: 7,
            categoryName: '랜덤'
        }
    ],
    retCode: "0000",
    retMsg: "SUCCESS",
}

router.post('/', function (req, res, next) {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.json({category})
});
module.exports = router;