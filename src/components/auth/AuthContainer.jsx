import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AuthContainer = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(true);
  };

  const toggleSignUp = () => {
    setIsSignIn(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-toggle">
        <button onClick={toggleSignIn}>Sign In</button>
        <button onClick={toggleSignUp}>Sign Up</button>
      </div>
      <div className="auth-box">
        {isSignIn ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
};

export default AuthContainer;
