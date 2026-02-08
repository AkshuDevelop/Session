import React from 'react'
import './Login.css'
function Login() {
  return (
    <div id='LoginContainer'>
        <img src="/src/assets/icon.svg" alt="Session" id='icon'/>
        <div id='title'>Welcome Back</div>
        <div id='SubText'>Enter your credentials to access your workspace.</div>
        <button id='GoogBtn'><div id='GBtnText'><img src="/src/assets/google.svg" id='gicon' /> Continue with Google</div></button>
        <div id='or'><img src="/src/assets/lines.svg" className='line'/>OR CONTINUE WITH EMAIL<img src="/src/assets/lines.svg"  className='line'/></div>
        <form id='LoginFormEmail'>
          <input type="email" placeholder='name@example.com' id='email'/>
          <button id='LoginBtn'>Sign in with Email</button>
        </form>
        <div id='signup'>Don't have an account? <a href="#" id='signupLink'>Sign Up</a></div>
</div>
  )
}

export default Login