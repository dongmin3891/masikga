import React from "react"
import * as S from "./style";

interface IProps {
    onClick: () => void;
}

const LoginButton = ({ onClick } : IProps) => {
    
    return (
        <S.LoginBox>
            <S.CenterBox>
              <button onClick={onClick}>로그인</button>
            </S.CenterBox>
        </S.LoginBox>
    )
}

export default LoginButton;
