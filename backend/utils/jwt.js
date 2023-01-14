const randToken = require('rand-token');
const jwt = require('jsonwebtoken');
const secretKey = require('../config/secretkey').secretkey;
const accessOption = require('../config/secretkey').accessOption;
const refreshOption = require('../config/secretkey').refreshOption;

const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

module.exports = {
  sign: async (user) => {
    //TODO: id,pass워드 받아야 할듯;
    const payload = {
      id: user
    };
    const result = jwt.sign(payload, secretKey, accessOption); // TODO payload정보 확인
    return result;
  },
  verify: async (token) => { 
    let decoded;
    try {
      decoded = jwt.verify(token, secretKey);
    } catch (err) {
      if(err.message === 'jwt expired') {
        console.log('expired token');
        return TOKEN_EXPIRED;
      }
      if(err.message === 'invalid token') {
        console.log('invalid token');
        return TOKEN_INVALID;
      }
      console.log('last invalid token');
      return TOKEN_INVALID;
    }
    return decoded;
  },
  refresh: async (user) => {
    const payload = {
      id: user
    };
    const result = jwt.sign(payload, secretKey, refreshOption);
    return result;
  },
  // 만료되었을 때 헤더에 담긴 Token을 가지고 USERId를 만듬
  refreshVerify: async (token, userId) => {
    try {
      const decoded = await jwt.verify(token, secretKey);
      if(decoded.id === userId){
        return true;
      }else {
        return false;
      }
    } catch(error) {
      return false
    }
  }
}