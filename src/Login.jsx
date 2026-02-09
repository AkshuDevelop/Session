import React from "react";
import "./Login.css";
function Login() {
  const [signUp, setSignup] = React.useState(false);
  console.log(signUp);

  return (
    <div id="LoginContainer">
      <img src="/src/assets/icon.svg" alt="Session" id="icon" />
      <div id="title">{signUp ? "Welcome Mate" : "Welcome Back"}</div>
      {!signUp ? (
        <>
          <div id="SubText">
            Enter your credentials to access your workspace.
          </div>
          <button
            id="GoogBtn"
            onClick={() => {
              window.location.href =
                "https://accounts.google.com/v3/signin/identifier?dsh=S-206835878%3A1688034416444228&continue=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2Foauthchooseaccount%3Fclient_id%3D1083975081996-9h7l5v1m4n9s8u7j1b5c6t9g5a4f0e.apps.googleusercontent.com%26as%3D-1b1e7c8b9c8e5a4f%26destination%3Dhttps%253A%252F%252Fsessionapp.netlify.app%252Fauth%252Fgoogle%252Fcallback%26approval_state%3Dnull%26oauthgdpr_skipv3%3Dtrue&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin";
            }}
          >
            <div id="GBtnText">
              <img src="/src/assets/google.svg" id="gicon" />
              Continue with Google
            </div>
          </button>
          <div id="or">
            <img src="/src/assets/lines.svg" className="line" />
            OR CONTINUE WITH EMAIL
            <img src="/src/assets/lines.svg" className="line" />
          </div>{" "}
        </>
      ) : (
        <></>
      )}
      {!signUp ? (
        <>
          <form id="LoginFormEmail">
            <input type="email" placeholder="name@example.com" id="email" />
            <button id="LoginBtn">Sign in with Email</button>
          </form>
          <div id="signup">
            Don't have an account?{" "}
            <a href="#" id="signupLink" onClick={() => setSignup(true)}>
              Sign Up
            </a>
          </div>
        </>
      ) : (
        <>
          <form id="SignUpForm">
            <input type="email" placeholder="name@example.com" id="emailSign" />
            <button id="SignInBtn">
              <img src="/src/assets/enter.svg" className="Enter" />
            </button>
          </form>
          <div id="signIn">
            Already have an account?{" "}
            <a href="#" id="signInLink" onClick={() => setSignup(false)}>
              Sign In
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
