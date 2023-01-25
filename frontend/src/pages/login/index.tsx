import React, { useEffect, useState } from "react"
import { withRouter } from "react-router";
import LoginButton from "../../components/login";
import { gettingUserInfo, settingAuthToken, settingUserInfo } from "../../store/LocalStore";
import { getLogin, setAuthToken } from "../../api";
import { useMutation } from "react-query";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserInfo from "../../interfaces/userInfo";
import { setRefreshTokenToCookie } from "../../utils/auth";
import BasicButton from "../../components/BasicButton";
import BoxSx from "../../components/BoxSx";
import ContainerSm from "../../components/Container";
import BasicInput from "../../components/BasicInput";

const LoginPage = ({history} : any) => {
    
    const [userInfo, setUserInfo] = useState<UserInfo>({
      id: '',
      password: '',
    });  

    const loginMutation = useMutation(getLogin, {
      onMutate: (variable : UserInfo) => {
        console.log("onMutate", variable);
      },
      onError: (error : any) => {
        errorHandler(error);
      },
      onSuccess: (data: any, variables, context) => {
        settingAuthToken(data.accessToken); // 로컬스토리지에 accessToken 저장
        settingUserInfo(userInfo); // 사용자 정보 저장
        setAuthToken(data.accessToken); // headers에 셋팅
        setRefreshTokenToCookie(data.refreshToken); // 쿠키에 refreshToken 저장
        
        history.push("/home");
      },
      onSettled: () => {
        console.log("end");
      }
    })
    
    const loginHandler = () => {
      const { id, password } = userInfo;

      if(id.length < 1){
        toast.error("아이디를 입력해주세요.");
        return ;
      }

      if(password.length < 1){
        toast.error("패스워트를 입력해주세요.");
        return;
      }

      loginMutation.mutate(userInfo);
    }

    const errorHandler = (error) => {
      const { response } = error;
      const message = response.data.retMsg;
      toast.error(message);
    }

    const userInfoHandler = (e) => {
      const { name, value } = e.target;
      if(name === 'id'){
        setUserInfo({...userInfo, id: value })
      }else {
        setUserInfo({...userInfo, password: value })
      }
    }


    

    return (
      <>
      {/* <ContainerSm> */}
      {/* <BoxSx> */}
        <div className="login_container">
          
          <div className="login_items">
          <h1 className="login-header">Sign In</h1>

            <BasicInput 
              placeholder="아이디를 입력해주세요." 
              variant="standard" 
              value={userInfo.id}
              name="id"
              onChange={(e) => userInfoHandler(e)}  
            />
            <BasicInput 
              placeholder="비밀번호를 입력해주세요." 
              variant="standard" 
              value={userInfo.password}
              name="password"
              type="password"
              onChange={(e) => userInfoHandler(e)}  
            />
            {/* <input className="login-input" type="text" placeholder="아이디입력" name='id' value={userInfo.id} onChange={(e) => userInfoHandler(e)} /> */}
            {/* <input className="login-input" type="password" placeholder="비밀번호 입력" name='password' value={userInfo.password} onChange={(e) => userInfoHandler(e)} />       */}
            <div>
              <BasicButton className="signin-button" text='로그인' variant="contained" onClick={loginHandler}></BasicButton>
              <BasicButton className="signup-button" text='회원가입' variant="contained" onClick={()=>history.push('/signup')}></BasicButton>
            </div>
          </div>
        </div>
      {/* </BoxSx> */}
      {/* </ContainerSm> */}
      <ToastContainer theme="colored" position="top-right" autoClose={2000} />
      </>
    )
}

export default LoginPage;