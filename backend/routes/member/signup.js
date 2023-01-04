const express = require('express');
const router = express.Router();
const User = require('../../schema/user')

let data = {
  retSysMsg : "SUCCESS",
  retCode: "0000",
  retMsg: "SUCCESS",
}

router.post('/', async function(req, res, next) {
  console.log("req member/signup",req.body);
  console.log("req member/signup2",req.query);
  const { id, password } = req.body;
  let user = await User.findOne({id});
  //이미 존재하는 경우
  if (user) {
      data.retCode = "0001" // TODO: retCode 실패 코드 재정의
      data.retSysMsg = "SUCCESS"
      data.retMsg = "User already exists"
      // return res.status(400).json({ errors: [{ msg: "User already exists" }]});
      return res.json(data);

  };
  user = new User({
    id,
    password
  })

  await user.save();
  res.statusCode = 200;
  res.json(data);
  // res.render('index', data );
});

module.exports = router;
