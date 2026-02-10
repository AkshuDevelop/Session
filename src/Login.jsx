import React from "react";
import "./Login.css";
function Login() {
  const [Status, setStatus] = React.useState(false);
  console.log(Status);

  return (
    <div id="Log_C">
      <img src="/src/assets/icon.svg" alt="Session" id="IcoImg" />
      <div id="Welcome_T">{Status ? "Welcome Mate" : "Welcome Back"}</div>
      {!Status ? (
        <>
          <div id="Sub_T">Enter your credentials to access your workspace.</div>
          <button
            id="Google_Btn_Auth"
            onClick={() => {
              window.location.href =
                "https://accounts.google.com/v3/signin/identifier?dsh=S-206835878%3A1688034416444228&continue=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2Foauthchooseaccount%3Fclient_id%3D1083975081996-9h7l5v1m4n9s8u7j1b5c6t9g5a4f0e.apps.googleusercontent.com%26as%3D-1b1e7c8b9c8e5a4f%26destination%3Dhttps%253A%252F%252Fsessionapp.netlify.app%252Fauth%252Fgoogle%252Fcallback%26approval_state%3Dnull%26oauthgdpr_skipv3%3Dtrue&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin";
            }}
          >
            <div id="Google_Btn_Auth_Content">
              <img
                src="/src/assets/google.svg"
                id="Google_Btn_Auth_Content_Ico"
              />
              Continue with Google
            </div>
          </button>
          <div id="Auth_MethodSeparation">
            <img
              src="/src/assets/lines.svg"
              className="Google_Btn_Auth_Content_Lines"
            />
            OR CONTINUE WITH EMAIL
            <img
              src="/src/assets/lines.svg"
              className="Google_Btn_Auth_Content_Lines"
            />
          </div>{" "}
        </>
      ) : (
        <></>
      )}
      {!Status ? (
        <>
          <form id="Log_Email_Auth_Form">
            <input
              type="email"
              placeholder="name@example.com"
              id="Auth_Email"
            />
            <button id="SignInWithEmail_Button_Auth">Sign in with Email</button>
          </form>
          <div id="signup">
            Don't have an account?{" "}
            <a href="#" id="signupLink" onClick={() => setStatus(true)}>
              Sign Up
            </a>
          </div>
        </>
      ) : (
        <>
          <form id="Sign_Email_Auth_Form">
            <input
              type="email"
              placeholder="name@example.com"
              id="Auth_Email_Account_Creation"
            />
            <button id="Auth_SignIn_Btn">
              <img src="/src/assets/enter.svg" className="Enter_Arrow_Svg" />
            </button>
          </form>
          <div id="Already_Have_An_Account_Popup">
            Already have an account?
            <a
              href="#"
              id="Already_Have_An_Account_Popup_Link_Redirect"
              onClick={() => setStatus(false)}
            >
              Sign In
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
