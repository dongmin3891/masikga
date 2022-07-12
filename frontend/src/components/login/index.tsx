import React from 'react';
import * as s from './style';

const Login = ({history}):JSX.Element => {

    const goHome = () => {
        history.replace("/home");
    }    

  return (
    
            <S.LoginBox>
                    <CenterBox onClick={goHome}>
                        고고고~
                    </CenterBox>
            </LoginBox>
    
  );
}

export default Login;