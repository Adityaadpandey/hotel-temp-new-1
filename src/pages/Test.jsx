import {GoogleOAuthProvider} from '@react-oauth/google';

const Test = () => {
    const { isSignedIn, user } = GoogleOAuthProvider({
        clientId: "378821471431-sicbspjgtk0bgtbfmdq831q0e90s7mou.apps.googleusercontent.com"
    });
    return (
      <>
        <div>
       {isSignedIn ? (
        <div>
          <h1>Hello, {user.name}</h1>
          {/* <button onClick={signOut}>Sign out</button> */}
        </div>
      ) : (
        // <button onClick={signIn}>Sign in</button>
        <h1>Not Signed In</h1>
      )}
    </div>
      </>
  )
}

export default Test