import React from "react"
import LoginButton from "../../components/login";

const LoginPage = ({history} : any) => {
    
    const goHome = () => {
        console.log("goHome");
        history.replace("/home");
    }

    return (
        <LoginButton goHomeOnClick={goHome} />            
    )
}

export default LoginPage;