const express = require('express');
const router = express.Router();
const User = require('../../schema/user')

let data = {
  retSysMsg : "SUCCESS",
  retCode: "",
  retMsg: "",
}

router.post('/', async function(req, res, next) {
  const { id, password } = req.body;
  let user = await User.findOne({id});
  //이미 존재하는 경우
  if (user) {
      data.retCode = "0001" // TODO: retCode 실패 코드 재정의
      data.retMsg = "아이디가 이미 존재합니다."
      res.statusCode = 400;
      return res.json(data);
  };
  user = new User({
    id,
    password
  })

  await user.save();
  data.retCode = "0000" // TODO: retCode 실패 코드 재정의
  data.retMsg = "SUCCESS"
  res.statusCode = 200;
  res.json(data);
  // res.render('index', data );
});

module.exports = router;
