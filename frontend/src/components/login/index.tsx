import React from "react"
import * as S from "./style";

interface IProps {
    goHomeOnClick: () => void;
}

const LoginButton = ({ goHomeOnClick } : IProps) => {
    
    return (
        <S.LoginBox>
            <S.CenterBox>
              <button onClick={goHomeOnClick}>로그인</button>
            </S.CenterBox>
        </S.LoginBox>
    )
}

export default LoginButton;
