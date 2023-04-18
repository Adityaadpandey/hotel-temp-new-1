import { useState } from 'react';
import { GoogleLogin } from '@react-google-login';

const CLIENT_ID = '378821471431-sicbspjgtk0bgtbfmdq831q0e90s7mou.apps.googleusercontent.com';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const onSuccess = (response) => {
    console.log('Login Success: currentUser:', response.profileObj);
    setUser(response.profileObj);
    setIsLoggedIn(true);
  };

  const onFailure = (response) => {
    console.log('Login Failed:', response);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome {user.name}!</h2>
          <p>You are now logged in with Google.</p>
        </div>
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          responseType="code,token"
        />
      )}
    </div>
  );
};

export default Login;
