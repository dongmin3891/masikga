import React from 'react';
import {BrowserRouter,Switch, Route, Redirect} from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Header from './components/header';
import CategoryList from './pages/home';
import LoginPage from './pages/login';


const Main = () => {

  // TODO : 로그인 기능 만들어서 메인쪽에서 로그인에 필요한 데이터가 없을 때
  // 강제로 로그인 페이지로 이동하는 기능 구현해야함

  return (
    <>
        {/* <GlobalStyles />  */}
        {/* <Header />
        <Login />  */}
        <BrowserRouter>
          <GlobalStyles />
          <Header />
            <Switch>
                <Route path='/login' component={LoginPage} />
                <Route path='/menulist' component={CategoryList}/>
            </Switch>
            <Redirect to='/login' />
        </BrowserRouter>
    </>
  );
}

export default Main;
