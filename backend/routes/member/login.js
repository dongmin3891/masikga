const express = require('express');
const router = express.Router();
const User = require('../../schema/user')
const jwt = require('../../utils/jwt');

let data = {
  retSysMsg : "",
  retCode: "",
  retMsg: "",
}

router.post('/', async function(req, res, next) {
  const { id, password } = req.body;
  let user = await User.findOne({id});
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

  const accessToken = await jwt.sign(id);
  const refreshToken = await jwt.refresh(id);

  const jwtToken = {
    accessToken : accessToken,
    refreshToken : refreshToken,
  }

  jwtToken.retCode = "0000";
  jwtToken.retSysMsg = "SUCCESS";
  jwtToken.retMsg = "SUCCESS";
  res.statusCode = 200;

  res.json(jwtToken);
  // res.render('index', data );
});

module.exports = router;
