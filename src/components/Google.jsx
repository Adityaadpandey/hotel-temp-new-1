import React from "react";

import { GoogleLogin } from '@react-oauth/google';

const Google = () => {


  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        localStorage.setItem('cred', true);
        const cred = localStorage.getItem('cred');
        console.log(cred + '  Login Success');
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  )
}

export default Google;