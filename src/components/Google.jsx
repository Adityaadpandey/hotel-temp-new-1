import React from "react";

import { GoogleLogin } from "@react-oauth/google";

const google = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
        localStorage.setItem("cred", credentialResponse.clientId);
        const cred = localStorage.getItem("cred");
        console.log(cred + "  Login Success");

      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default google;
