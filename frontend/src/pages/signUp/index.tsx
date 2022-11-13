import React, { useEffect, useState } from 'react'

function SignUp() {

  const [userInfo, setUserInfo] = useState({
    id: '',
    password: '',
    password2: '',
  })
  const [passwordConfirm, setPasswordConfirm] = useState(true);

  useEffect(() => {
    if(userInfo.password.length > 0 && userInfo.password2.length > 0){
      if(userInfo.password !== userInfo.password2){
        setPasswordConfirm(false)
      }else {
        setPasswordConfirm(true);
      }
    }
    
  },[userInfo.password, userInfo.password2])

  const settingUserInfo = (e) => {
    const { name, value } = e.target;
    if(name === 'id'){
      setUserInfo({...userInfo, id: value })
    }else if(name ==='password' ){
      setUserInfo({...userInfo, password: value })
    }else {
      setUserInfo({...userInfo, password2: value })
    }
  }
  // toast popup으로 하기
  const signUpOnClick = () => {
    if(userInfo.id.length < 1){
      console.log("id를 입력해주세요!")
    } else if (userInfo.password.length < 1){
      console.log("password를 입력해주세요!")
    } else if (userInfo.password2.length < 1){
      console.log("password를 재확인해주세요!")
    } else {
      // 만약 비밀번호가 틀린상태 여보 회원가입을 성공함 
      if(passwordConfirm){
        console.log("회원가입 성공!")
        const setuUserInfo = {
          id: userInfo.id,
          password: userInfo.password2
        };
        settingUserInfo(setuUserInfo)
      }else {
        console.log("비밀번호 확인!");
      }
    }
  }


  return (
    <>
      <h1>회원가입 페이지</h1>
      <div>
        <span>아이디 : </span>
        <input type="text" placeholder='아이디' name='id' onChange={(e) => settingUserInfo(e)}  />
      </div>
      <div>
        <span>비밀번호 : </span>
        <input type="password" placeholder='비밀번호' name='password' onChange={(e) => settingUserInfo(e)} />
      </div>
      <div>
        <span>비밀번호 확인 : </span>
        <input type="password" placeholder='비밀번호 확인' name='passwrod_confirm' onChange={(e) => settingUserInfo(e)} />
      </div>
      {!passwordConfirm && 
        <div>비밀번호가 일치하지 않습니다!</div>
      }

      <button onClick={signUpOnClick}>가입하기</button>
      <button>다음에 하기</button>

    </>
  )
}

export default SignUp;