const jwt = require('../utils/jwt');
const jwt_decode = require('jwt-decode');
const secretKey = require('../config/secretkey').secretkey
const TOKEN_EXPIRED = -3; // 만료
const TOKEN_INVALID = -2; // 유요하지 않음

const authUtil = {
  checkToken : async (req, res, next) => {
    const token = req.header("x-auth-token");
    if(!token){
      return res.status(401).json({msg: "No token, authorization denied"});
    }

    try {
      const decoded = await jwt.verify(token, secretKey);
      if(decoded === TOKEN_EXPIRED){
        return res.status(401).json({msg: "유효기간이 만료되었습니다."});
      }

      if(decoded === TOKEN_INVALID){
        return res.status(401).json({msg: "유효하지 않은 토큰입니다."});
      }

      req.id = decoded.id;
      next();
      // 만료된 경우 다 Catch로 빠지는 지 확인
    } catch (error) {
      res.status(401).json({ msg: "Token is not valid"});
    }
  },
  refresh : async(req, res) => {
    const accessToken = req.header("x-auth-token");
    const refreshToken = req.header("refresh-token");
    console.log("accessToken && refreshToken ",accessToken, refreshToken);
    if(accessToken && refreshToken){
      const accessTokenVerify = await jwt.verify(accessToken, secretKey);
      //refresh를 만료전에 처리해도 될런지
      // if(accessTokenVerify === TOKEN_EXPIRED){ // 유효기간만료인 경우
        const decoded = await jwt_decode(accessToken);
        console.log("decoded @@@@", decoded);
        // refreshtoken
        const refreshVerify = jwt.refreshVerify(refreshToken, decoded.id);
        console.log("refeshVerify", refreshVerify);
        if(!refreshVerify){
          res.status(401).json({ msg: "No authorized!"});
        }else {
          const newAccessToken = await jwt.sign(decoded.id);
          const jwtToken = {
            accessToken : newAccessToken,
            refreshToken : refreshToken,
            retCode : '0000',
            retSysMsg : "SUCCESS",
            retMsg : 'SUCCESS'
          }
          return res.status(200).json(jwtToken); // 새로 발급한 access token과 원래 있던 refresh token 모두 클라이언트에게 반환합니다.
        }
      // }else{
        // 만료되지 않은 경우에도 새로 발급처리
        console.log("임시");
        return res.status(200).json({ msg: "Access token is not expired!"});
      // }
    }else {
      return res.status(401).json({ msg: "Access token and refresh token are need for refresh!"});
    }
  }
}

module.exports = authUtil;