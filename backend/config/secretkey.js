module.exports = {
  secretkey : 'mysecretkey',
  accessOption : {
    algorithm : 'HS256', // 해싱 알고리즘
    expiresIn : '1m', // 토큰 유효 기간
    issuer : "issuer" // 발행자 
  },
  refreshOption : {
    algorithm : 'HS256', // 해싱 알고리즘
    expiresIn : '14d', // 토큰 유효 기간
    issuer : "issuer" // 발행자 
  }
}