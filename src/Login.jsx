import React from "react";
import "./Login.css";
import Dashboard from "./Dashboard";

/**
 * Login.jsx
 *
 * Authentication UI component that handles sign-in and sign-up flows (email + Google).
 *
 * Overview:
 *  - Renders either the sign-in UI or sign-up flow based on internal state.
 *  - Supports "Continue with Google" redirect and an email-based flow which advances through stages
 *    (email -> OTP -> password) for demonstration purposes.
 *
 * Internal state (key variables):
 *  - Status: boolean — false => sign-in mode, true => sign-up mode
 *  - LoginStage: number — stage of the sign-up flow (0: email, 1: OTP, 2: password, ...)
 *  - inputValue: string — controlled input value for the current stage
 *  - emailError: string — validation or UI errors to display to the user
 *
 * Important functions:
 *  - validateEmail(email): boolean — returns truthy if the email matches a common regex pattern
 *  - handleEmailSignIn(e): submits the sign-in form; validates email and advances LoginStage
 *  - handleSignUpSubmit(e): handles sign-up form submission depending on current LoginStage
 *
 * Accessibility / UX:
 *  - The input is focused when `LoginStage` changes via a ref and useEffect.
 *  - Error messages are displayed inline and styled in crimson.
 *
 * Notes:
 *  - This component is currently front-end-only; actual authentication (API calls, token handling)
 *    should be added where indicated.
 *  - The Google sign-in button triggers a redirect to Google's login endpoint for demo purposes.
 */

function Login() {
  const [Status, setStatus] = React.useState(false);
  const [LoginStage, SetLoginStage] = React.useState(0);

  // input state and error state
  const [inputValue, setInputValue] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  // This is for future form data extraction
  const loginInputId =
    LoginStage === 1
      ? "LoginStage_Email_Auth_0"
      : LoginStage === 2
        ? "LoginStage_Email_Auth_1"
        : "LoginStage_Email_Auth_2";

  const PlaceholderId =
    LoginStage === 0
      ? "name@example.com"
      : LoginStage === 1
        ? "OTP"
        : "Password";

  // Fixed email validation regex (removed stray dot and uses the common RFC-ish regex)
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const TypeholderId =
    LoginStage === 0 ? "email" : LoginStage === 1 ? "number" : "password";

  // Handler for sign-in-with-email form
  const handleEmailSignIn = (e) => {
    e.preventDefault();
    setEmailError("");
    if (validateEmail(inputValue)) {
      // proceed to next stage (e.g. OTP)
      SetLoginStage((s) => (s >= 3 ? s : s + 1));
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  // ref to the input so we can focus it after clearing
  const inputRef = React.useRef(null);

  // Clear the input value (and error) every time LoginStage changes.
  // Also focus the input if it exists.
  React.useEffect(() => {
    setInputValue("");
    setEmailError("");
    if (inputRef.current && typeof inputRef.current.focus === "function") {
      inputRef.current.focus();
    }
  }, [LoginStage]);

  // Generic submit for the sign-up form (uses LoginStage and inputValue)
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    if (LoginStage === 0) {
      // email stage -> validate email then go to next
      if (validateEmail(inputValue)) {
        SetLoginStage(1);
      } else {
        setEmailError("Please enter a valid email address.");
      }
    } else {
      // other stages (OTP / password) - advance stage for now
      SetLoginStage((s) => (s >= 3 ? s : s + 1));
    }
  };

  console.log(LoginStage);
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
                alt="google"
              />
              Continue with Google
            </div>
          </button>
          <div id="Auth_MethodSeparation">
            <img
              src="/src/assets/lines.svg"
              className="Google_Btn_Auth_Content_Lines"
              alt="lines"
            />
            OR CONTINUE WITH EMAIL
            <img
              src="/src/assets/lines.svg"
              className="Google_Btn_Auth_Content_Lines"
              alt="lines"
            />
          </div>{" "}
        </>
      ) : (
        <></>
      )}
      {!Status ? (
        <>
          <form id="Log_Email_Auth_Form" onSubmit={handleEmailSignIn}>
            <input
              type="email"
              placeholder="name@example.com"
              id="Auth_Email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button id="SignInWithEmail_Button_Auth" type="submit">
              Sign in with Email
            </button>
          </form>
          {emailError && (
            <div id="Email_Error" style={{ color: "crimson", marginTop: 8 }}>
              {emailError}
            </div>
          )}
          <div id="Dont_have_an_account_Component">
            Don't have an account?
            <a
              href="#"
              id="Dont_have_an_account_Component_SignupLink"
              onClick={() => {
                setStatus(true);
                setInputValue("");
                setEmailError("");
                SetLoginStage(0);
              }}
            >
              Sign Up
            </a>
          </div>
        </>
      ) : (
        <>
          <form id="Sign_Email_Auth_Form" onSubmit={handleSignUpSubmit}>
            <input
              type={TypeholderId}
              ref={inputRef}
              placeholder={PlaceholderId}
              className="Auth_Email_Account_Creation"
              id={loginInputId}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button id="Auth_SignIn_Btn" type="submit">
              <img
                src="/src/assets/enter.svg"
                className="Enter_Arrow_Svg"
                alt="enter"
              />
            </button>
          </form>
          {emailError && (
            <div id="Email_Error" style={{ color: "crimson", marginTop: 8 }}>
              {emailError}
            </div>
          )}
          <div id="Already_Have_An_Account_Popup">
            Already have an account?
            <a
              href="#"
              id="Already_Have_An_Account_Popup_Link_Redirect"
              onClick={function SettingUpdates() {
                setStatus(false);
                SetLoginStage(0);
                setInputValue("");
                setEmailError("");
              }}
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
