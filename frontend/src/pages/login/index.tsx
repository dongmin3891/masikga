import React, { useEffect, useState } from "react"
import { withRouter } from "react-router";
import LoginButton from "../../components/login";
import { gettingUserInfo } from "../../store/LocalStore";
import { getLogin } from "../../api";
import { useMutation } from "react-query";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserInfo from "../../interfaces/userInfo";

const LoginPage = ({history} : any) => {
    
    const [userInfo, setUserInfo] = useState<UserInfo>({
      id: '',
      password: '',
    });  

    const loginMutation = useMutation(getLogin, {
      onMutate: variable => {
        console.log("onMutate", variable);
      },
      onError: (error : any) => {
        errorHandler(error);
      },
      onSuccess: (data, variables, context) => {
        settingUserInfo(userInfo);
        history.push("/home");
        console.log("success", data, variables, context);
      },
      onSettled: () => {
        console.log("end");
      }
    })

    useEffect(() => {
      console.log("배포 테스트@@@@@@@@@@@@@@@@@@@@@@@@");
    }, [])
     useEffect(() => {
      console.log("배포 테스트1@@@@@@@@@@@@@@@@@@@@@@@@");
    }, [])

    useEffect(() => {
      console.log("배포 테스트2@@@@@@@@@@@@@@@@@@@@@@@@");
    }, [])
    useEffect(() => {
      console.log("배포 테스트3@@@@@@@@@@@@@@@@@@@@@@@@");
    }, [])
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

    const login = () => {

      if(gettingUserInfo() === null){
        // TODO: 회원가입 페이지 버튼 또는 모달 만들기 
        console.log("회원가입페이지로 이동!");
        history.replace('/signup');
        return;
      }

      const { id, password } = gettingUserInfo();
      // 로컬스토리지에 저장된 회원정보와 사용자가 입력한 회원정보를 비교

      if(id === userInfo.id && password === userInfo.password){
        // TODO: 로컬스토리지 저장 여부 확인
        const params = {
          userInfo : userInfo.id,
          password : userInfo.password
        }
        // loginTest(params);
        history.push("/");
      } else {
        // 로그인 실패 회원가입 페이지로 이동
        console.log("회원정보가 일치하지 않습니다.");
      }
    }

    const settingUserInfo = (e) => {
      const { name, value } = e.target;
      if(name === 'id'){
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
        <LoginButton onClick={loginHandler} />            
      </div>
      <ToastContainer theme="colored" position="top-right" autoClose={2000} />
      </>
    )
}

export default LoginPage;