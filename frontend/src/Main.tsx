import React from 'react';
import {BrowserRouter,Switch, Route, Redirect} from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Home from './components/home/CategoryButton';


const Main = () => {
  return (
    <>
        {/* <GlobalStyles />  */}
        {/* <Header />
        <Login />  */}
        <BrowserRouter>
          <GlobalStyles />
          <Header />
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/home' component={Home}/>
            </Switch>
            <Redirect to='/login' />
        </BrowserRouter>
    </>
  );
}

export default Main;
