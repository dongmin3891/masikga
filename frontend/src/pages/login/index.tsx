import React, { useEffect, useState } from "react"
import { withRouter } from "react-router";
import LoginButton from "../../components/login";
import { gettingUserInfo } from "../../store/LocalStore";

const LoginPage = ({history} : any) => {
    
    const [userInfo, setUserInfo] = useState({
      id: '',
      password: '',
    });  

    useEffect(() => {
      console.log("userInfo", userInfo);
    }, [userInfo])

    const goHome = () => {
      if(gettingUserInfo() === null){
        console.log("회원가입페이지로 이동!");
        history.replace('/signup')
        return;
      }
      const { name, password } = gettingUserInfo();
      // 로컬스토리지에 저장된 회원정보와 사용자가 입력한 회원정보를 비교
      if(name === userInfo.id && password === userInfo.password){
        // TODO: 로컬스토리지 저장 여부 확인
        history.push("/home");
      } else {
        // 로그인 실패 회원가입 페이지로 이동
        console.log("회원정보가 일치하지 않습니다.");
      }
    }

    const settingUserInfo = (e) => {
      const { name, value } = e.target;
      if(name === 'id'){
        console.log("name", value);
        setUserInfo({...userInfo, id: value })
      }else {
        setUserInfo({...userInfo, password: value })
      }
    }
    

    return (
      <>
      <div>
        <input type="text" placeholder="아이디입력" name='id' value={userInfo.id} onChange={(e) => settingUserInfo(e)} />
        <input type="password" placeholder="비밀번호 입력" name='password' value={userInfo.password} onChange={(e) => settingUserInfo(e)} />      
        <LoginButton onClick={goHome} />            
      </div>
      </>
    )
}

export default LoginPage;