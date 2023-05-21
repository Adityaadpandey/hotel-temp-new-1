import React from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from '../components/Google';
import "../styles/Login.css"


const Login = () => {
    if (localStorage.getItem('Log') === 'true') {
        window.location.href = '/booking';
    }

    return (
        <>
            <div className="container-me">
         <GoogleOAuthProvider clientId="378821471431-sicbspjgtk0bgtbfmdq831q0e90s7mou.apps.googleusercontent.com">
          <Google/>
                </GoogleOAuthProvider>
            </div>
           
        </>
    )
};

export default Login;
