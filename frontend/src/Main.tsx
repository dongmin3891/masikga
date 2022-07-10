import React from 'react';
import {BrowserRouter,Switch, Route, Redirect} from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Header from './components/header';
import CategoryList from './pages/home';
import LoginPage from './pages/login';


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
                <Route path='/login' component={LoginPage} />
                <Route path='/menulist' component={CategoryList}/>
            </Switch>
            <Redirect to='/login' />
        </BrowserRouter>
    </>
  );
}

export default Main;
