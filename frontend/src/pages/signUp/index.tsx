import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { getSignUp } from '../../api';
import { settingUserInfo } from '../../store/LocalStore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMutation } from 'react-query';

function SignUp() {

  const [userInfo, setUserInfo] = useState({
    id: '',
    password: '',
    password2: '',
  })
  const [passwordConfirm, setPasswordConfirm] = useState(false);
  
  // TODO: useHistory 모듈화
  const history = useHistory();

  useEffect(() => {
    if(userInfo.password.length > 0 && userInfo.password2.length > 0){
      if(userInfo.password !== userInfo.password2){
        setPasswordConfirm(false)
      }else {
        setPasswordConfirm(true);
      }
    }
    
  },[userInfo.password, userInfo.password2])

  const signUpMutation = useMutation(getSignUp, {
    onMutate: (variable) => {
      console.log("onMutate", variable);
    },
    onError: (error : any) => {
      // error
      errorHandler(error);
    },
    onSuccess: (data, variable, context) => {
      // success
      history.goBack();
      setTimeout(() => {
        toast.success('회원가입이 완료되었습니다!'); 
      }, 100)
    },
    onSettled: () => {
      // fainally
    }
  })

  // TODO: 공통화 
  const errorHandler = (error) => {
    const { response } = error;
    const message = response.data.retMsg;
    toast.error(message);
  }

  const userInfoHandler = (e) => {
    const { name, value } = e.target;
    if(name === 'id'){
      setUserInfo({...userInfo, id: value })
    }else if(name ==='password' ){
      setUserInfo({...userInfo, password: value })
    }else {
      setUserInfo({...userInfo, password2: value })
    }
  }

  const signUpHandler = async () => {
    const { id, password, password2} = userInfo;
    
    if(id.length < 1){
      toast.error("id를 입력해주세요!");
      return;
    }

    if(password.length < 1){
      toast.error("password를 입력해주세요!");
      return;
    }

    if(password2.length < 1){
      toast.error("password를 재확인해주세요!");
      return;
    }

    if(passwordConfirm){
      const params = {
        id: id,
        password: password2
      }
      signUpMutation.mutate(params);
    }
  }


  return (
    <>
      <h1>회원가입 페이지</h1>
      <div>
        <span>아이디 : </span>
        <input type="text" placeholder='아이디' name='id' onChange={(e) => userInfoHandler(e)}  />
      </div>
      <div>
        <span>비밀번호 : </span>
        <input type="password" placeholder='비밀번호' name='password' onChange={(e) => userInfoHandler(e)} />
      </div>
      <div>
        <span>비밀번호 확인 : </span>
        <input type="password" placeholder='비밀번호 확인' name='passwrod_confirm' onChange={(e) => userInfoHandler(e)} />
      </div>
      {!passwordConfirm && userInfo.password2.length > 0 && 
        <div>비밀번호가 일치하지 않습니다!</div>
      }

      <button onClick={signUpHandler}>가입하기</button>
      <button>다음에 하기</button>
      <ToastContainer theme="colored" position="top-right" autoClose={2000} />
    </>
  )
}

export default SignUp;