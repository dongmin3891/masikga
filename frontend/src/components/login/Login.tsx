import React from 'react';
import styled from 'styled-components';

const LoginBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const CenterBox = styled(LoginBox)`
    width: 100px;
    height: 100px;
    /* margin: 0 auto ; */
    background-color: black ;
    color: white ;
`;

const Login = ({history}):JSX.Element => {

    const goHome = () => {
        history.replace("/home");
    }    

  return (
    
            <LoginBox>
                    <CenterBox onClick={goHome}>
                        고고고~
                    </CenterBox>
            </LoginBox>
    
  );
}

export default Login;