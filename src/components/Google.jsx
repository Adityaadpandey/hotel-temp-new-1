import React from "react";

import { GoogleLogin } from "@react-oauth/google";

const google = () => {
  return (
    <GoogleLogin
      onSuccess={(userInfo) => {
        console.log(userInfo);
        localStorage.setItem("cred", userInfo);
        const cred = localStorage.getItem("cred");
        console.log(cred + "  Login Success");

      }}
      onError={() => {
        console.log("Login Failed");
      }}
      scope="https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"
      responseType="code"
      accessType="offline"
    />
  );
};

export default google;
