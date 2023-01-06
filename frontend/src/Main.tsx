import React, { useEffect } from 'react';
import {BrowserRouter,Switch, BrowserRouter as Router, Route, useHistory} from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Header from './components/header';
import LoginPage from './pages/login';
import Home from './pages/home/index';
import { gettingUserInfo } from './store/LocalStore';
import SignUp from './pages/signUp';

// TODO: history error 확인
const Main = () => {
  const history = useHistory();
  // TODO : 로그인 기능 만들어서 메인쪽에서 로그인에 필요한 데이터가 없을 때
  // 강제로 로그인 페이지로 이동하는 기능 구현해야함
  // console.log("location", location.pathname);

  useEffect(() => {
    // localstroge에 user 정보가 없으면 login페이지로 redirect
    if(gettingUserInfo() === null || gettingUserInfo() === undefined){
      history?.push({pathname: '/login' });
    }else {
      history.replace({pathname: '/home' });
    }
  }, [])

  return (
    <>
        {/* <GlobalStyles />  */}
        {/* <Header />
        <Login />  */}
        {/* <BrowserRouter> */}
          <GlobalStyles />
          <Header />
            <Switch>
                <Route exact path='/home' component={Home}/>
                <Route path='/login' component={LoginPage} />
                <Route path='/signup' component={SignUp} />
            </Switch>
            {/* <Redirect to='/login' /> */}
        {/* </BrowserRouter> */}
    </>
  );
}

export default Main;
