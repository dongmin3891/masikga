const express = require('express');
const router = express.Router();
const User = require('../../schema/user')

let data = {
  retSysMsg : "",
  retCode: "",
  retMsg: "",
}

router.post('/', async function(req, res, next) {
  const { id, password } = req.body;
  let user = await User.findOne({id});
  console.log("findUser", user);
  if(!user){
    data.retCode = "0002"
    data.retSysMsg = "SUCCESS"
    data.retMsg = "존재하지 않는 ID입니다."
    res.statusCode = 404;

    return res.json(data);
  }

  if(user.password !== password){
    data.retCode = "0003"
    data.retSysMsg = "SUCCESS"
    data.retMsg = "비밀번호가 일치하지 않습니다."
    res.statusCode = 409;

    return res.json(data);
  }
  data.retCode = "0000";
  data.retSysMsg = "SUCCESS";
  data.retMsg = "SUCCESS";
  res.statusCode = 200;

  res.json(data);
  // res.render('index', data );
});

module.exports = router;
